import {
  phonePrefixOptions,
  professionsOptions,
  provincesOptions,
} from "./constantData";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { HeaderStepperCounter } from "@app/components/HeaderStepperCounter";
import moment from "moment/moment";
import { Asset } from "react-native-image-picker";
import { convertImageToBlob, MediaTypes } from "@app/models/Media";
import MediaManagerSingleton from "@app/models/MediaManagerSingleton";
import { addressSchema } from "@app/models/Address/validations";
import { initialAddressValues } from "@app/models/Address/constantData";

YupPassword(yup);

interface ProfessionalRegisterFormData {
  name: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
  professionalPaperPhoto: any;
  professionalRegistrationNumber: string;
  province: string;
  specialization: string[];
  officeLocations: {
    address: any;
    phone: string;
  }[];
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup
    .date()
    .required("Inserisci la tua data di nascita")
    .test(
      "age-check",
      "Devi avere compiuto almeno 21 anni per registrarti come professionista",
      function (value) {
        const today = moment();
        const birthDate = moment(value);
        const age = today.diff(birthDate, "years");
        return age >= 21;
      },
    ),
  phonePrefix: yup.string().required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
  professionalPaperPhoto: yup.mixed().required("Inserisci la tua foto"),
  professionalRegistrationNumber: yup
    .string()
    .matches(/^[0-9]{4,10}$/, "Inserisci un numero di registrazione valido")
    .required(),
  province: yup.string().required("Inserisci la tua provincia"),
  specialization: yup
    .array()
    .of(yup.string().required())
    .required("Inserisci la tua specializzazione"),
  officeLocations: yup
    .array()
    .of(
      yup.object().shape({
        address: addressSchema().required("Inserisci l'indirizzo dell'ufficio"),
        phone: yup
          .string()
          .matches(
            /^(\+?\d{1,4} )?\d{8,15}$/,
            "Inserisci un numero di telefono d'ufficio valido",
          )
          .required("Inserisci il numero di telefono"),
      }),
    )
    .required("Inserisci almeno un luogo di lavoro"),
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("Inserisci il tuo indirizzo email"),
  password: yup
    .string()
    .password()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .max(50, "La password deve essere di al massimo 50 caratteri")
    .minLowercase(1, "La password deve contenere almeno una lettera minuscola")
    .minUppercase(1, "La password deve contenere almeno una lettera maiuscola")
    .minNumbers(1, "La password deve contenere almeno un numero")
    .minSymbols(1, "La password deve contenere almeno un simbolo")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Le password non corrispondono")
    .required(),
});

const firstStepFieldKeys = [
  "name",
  "lastName",
  "birthDate",
  "phonePrefix",
  "phoneNumber",
] as const;
const secondStepFieldKeys = [
  "professionalPaperPhoto",
  "professionalRegistrationNumber",
  "province",
  "specialization",
  "officeLocations",
] as const;
const thirdStepFieldKeys = ["email", "password", "confirmPassword"] as const;

export const useProfessionalRegister = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const stepperIndex: number = useSelector(
    selectors.getProfessionalRegisterStepperCounter,
  );
  const uploadedImage = useSelector(selectors.getUploadedMedia);

  const formData = useForm<ProfessionalRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      birthDate: undefined,
      phonePrefix: "+39",
      phoneNumber: "",
      professionalPaperPhoto: undefined,
      professionalRegistrationNumber: "",
      province: "",
      officeLocations: [{ address: initialAddressValues, phone: "" }],
      email: "",
      password: "",
      confirmPassword: "",
      specialization: undefined,
    },
  });

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, isSubmitted, errors },
  } = formData;

  const {
    fields: officeLocationsFields,
    append: officeLocationsAppend,
    remove: officeLocationsRemove,
  } = useFieldArray({
    name: "officeLocations",
    control,
  });

  const [name, lastName, birthDate, phonePrefix, phoneNumber] = useWatch({
    control,
    name: firstStepFieldKeys,
  });

  const [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocations,
  ] = useWatch({
    control,
    name: secondStepFieldKeys,
  });

  const [email, password, confirmPassword] = useWatch({
    control,
    name: thirdStepFieldKeys,
  });

  const step1Filled = useMemo(
    () =>
      Boolean(name) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber),
    [name, lastName, birthDate, phonePrefix, phoneNumber],
  );

  const step2Filled = useMemo(
    () =>
      Boolean(professionalPaperPhoto) &&
      Boolean(professionalRegistrationNumber) &&
      Boolean(province) &&
      Boolean(specialization) &&
      Boolean(officeLocations.length),
    [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocations,
    ],
  );

  const macroSpecializations = useMemo(
    () =>
      professionsOptions
        .filter((specializationData) =>
          specializationData.options.some((pathology) =>
            (specialization ?? []).includes(pathology.value),
          ),
        )
        .map((specData) => specData.value),
    [specialization],
  );

  const step3Filled = useMemo(
    () => Boolean(email) && Boolean(password) && Boolean(confirmPassword),
    [email, password, confirmPassword],
  );

  const currentStepFilled = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const submitDisabled = useMemo(
    () =>
      !isDirty ||
      (isSubmitted && !isValid) ||
      !step1Filled ||
      !step2Filled ||
      !step3Filled,
    [isDirty, isSubmitted, isValid, step1Filled, step2Filled, step3Filled],
  );

  const canGoToNextStep = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const firstStepCompletionPercentage = useMemo(() => {
    const fields = [name, lastName, birthDate, phonePrefix, phoneNumber];

    return fields.filter(Boolean).length / fields.length;
  }, [name, lastName, birthDate, phonePrefix, phoneNumber]);

  const secondStepCompletionPercentage = useMemo(() => {
    const fields = [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocations.length,
    ];

    return fields.filter(Boolean).length / fields.length;
  }, [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocations,
  ]);

  const thirdStepCompletionPercentage = useMemo(() => {
    const fields = [email, password, confirmPassword];

    return fields.filter(Boolean).length / fields.length;
  }, [email, password, confirmPassword]);

  const currentStepCompletionPercentage = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return firstStepCompletionPercentage;
      case 2:
        return secondStepCompletionPercentage;
      case 3:
        return thirdStepCompletionPercentage;
      default:
        return 0;
    }
  }, [
    stepperIndex,
    firstStepCompletionPercentage,
    secondStepCompletionPercentage,
    thirdStepCompletionPercentage,
  ]);

  const triggerProfessionalRegisterSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.professionalRegistrationFormSubmitted({
            email: data.email,
            password: data.password,
            name: data.name,
            lastName: data.lastName,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
            specializations: macroSpecializations,
            city: data.province,
            alboId: data.professionalRegistrationNumber,
            professionalPaperPhotoId: uploadedImage?._id ?? "",
            phone: `${data.phonePrefix.split("+").join("")} ${
              data.phoneNumber
            }`,
            officeLocations: data.officeLocations.filter((officeLocation) =>
              Boolean(officeLocation.address.description),
            ),
          }),
        );
      }),
    [dispatch, handleSubmit, macroSpecializations, uploadedImage],
  );

  const removeOfficeCallbacks = useMemo(() => {
    return officeLocationsFields.map((_, index) => () => {
      officeLocationsRemove(index);
    });
  }, [officeLocationsFields, officeLocationsRemove]);

  const startImageUpload = useCallback(
    async (image: Asset) => {
      MediaManagerSingleton.imageData = await convertImageToBlob(image.uri!);

      dispatch(
        actions.mediaUpload({
          fileName: image.fileName!,
          mime: image.type!,
          type: MediaTypes.IMAGE,
          isPrivate: true,
        }),
      );
    },
    [dispatch],
  );

  const onAddOfficePressed = useCallback(() => {
    officeLocationsAppend({ address: initialAddressValues, phone: "" });
  }, [officeLocationsAppend]);

  const onNextStepButtonPressed = useCallback(async () => {
    let stepValid = false;

    switch (stepperIndex) {
      case 1:
        // Trigger fields from step 1
        stepValid = await trigger(firstStepFieldKeys);
        break;
      case 2:
        // Trigger fields from step 2
        stepValid = await trigger(secondStepFieldKeys);
        break;
      case 3:
        // Trigger fields from step 3
        stepValid = await trigger(thirdStepFieldKeys);
        break;
      default:
        break;
    }

    if (stepValid) {
      dispatch(
        actions.setProfessionalRegisterStepperCounter(
          Math.min(stepperIndex + 1, 3),
        ),
      );
    }
  }, [dispatch, stepperIndex, trigger]);

  const onPreviousStepButtonPressed = useCallback(() => {
    dispatch(
      actions.setProfessionalRegisterStepperCounter(
        Math.max(stepperIndex - 1, 1),
      ),
    );
  }, [dispatch, stepperIndex]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderStepperCounter currentStep={stepperIndex} totalSteps={3} />
      ),
    });
  }, [navigation, stepperIndex]);

  return {
    formData,
    submitDisabled,
    phonePrefixOptions,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
    startImageUpload,
    officeLocationsFields,
    onAddOfficePressed,
    removeOfficeCallbacks,
  };
};
