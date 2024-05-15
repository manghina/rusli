import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import * as yup from "yup";
import {
  countryOptions,
  genderOptions,
  phonePrefixOptions,
} from "./constantData";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { Professional } from "@app/models/Professional";
import { Asset } from "react-native-image-picker";
import mediaManagerSingleton from "@app/models/MediaManagerSingleton";
import { MediaTypes, convertImageToBlob } from "@app/models/Media";

interface ProfessionalEditPrivateFormData {
  name: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
  country?: string;
  gender?: string;
  professionalPaperPhoto: any;
  professionalRegistrationNumber: string;
  province: string;
}

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup
    .date()
    .max(
      moment().subtract(21, "years").toDate(),
      "Devi avere compiuto almeno 21 anni per usare l'app come professionista",
    )
    .min(
      moment().subtract(80, "years").toDate(),
      "La data selezionata non è valida",
    )
    .required("Inserisci la tua data di nascita"),
  phonePrefix: yup
    .string()
    .oneOf(phonePrefixOptions.map((phonePrefix) => phonePrefix.value))
    .required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
  professionalPaperPhoto: yup.mixed().required("Inserisci la tua foto"),
  professionalRegistrationNumber: yup
    .string()
    .matches(/^[0-9]{4,10}$/, "Inserisci un numero di registrazione valido")
    .required(),
  province: yup.string().required("Inserisci la tua provincia"),
  country: yup
    .string()
    // .oneOf(countryOptions.map((country) => country.value))
    .optional(),
  gender: yup.string().optional(),
});

// TODO: implement phone number verification

export const useProfessionalEditPrivateScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me = useSelector(selectors.getMe) as Professional | null;
  const uploadedImage = useSelector(selectors.getUploadedMedia);
  const isPatchingProfessional = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchProfessionalsMe.api),
  );

  const initialPhonePrefix = useMemo(
    () => (me?.phone?.includes(" ") ? `+${me?.phone?.split(" ")[0]}` : "+39"),
    [me],
  );

  const initialPhoneNumber = useMemo(
    () =>
      me?.phone?.includes(" ") ? me?.phone?.split(" ")[1] : me?.phone ?? "",
    [me],
  );

  const defaultValues = useMemo(
    () => ({
      name: me?.name || "",
      lastName: me?.lastName || "",
      birthDate: me?.birthDate
        ? moment(me.birthDate, "DD-MM-YYYY").toDate()
        : undefined,
      phonePrefix: initialPhonePrefix,
      phoneNumber: initialPhoneNumber,
      country: me?.country || "",
      gender: me?.gender || "",
      professionalPaperPhoto: me?.professionalPaperPhotoUrl || "",
      professionalRegistrationNumber: me?.alboId || "",
      province: me?.city || "",
    }),
    [me, initialPhonePrefix, initialPhoneNumber],
  );

  const formData = useForm<ProfessionalEditPrivateFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = formData;

  const phoneNumber = useWatch({
    control,
    name: "phoneNumber",
  });

  const [isVerifiedPhoneNumber, setIsVerifiedPhoneNumber] =
    useState<boolean>(false);

  const isToVerifyPhoneNumber = useMemo(
    () => Boolean(phoneNumber.length > 0 && !isVerifiedPhoneNumber),
    [phoneNumber, isVerifiedPhoneNumber],
  );

  const handleGoBackFromOtpVerification = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const handleOtpVerification = useCallback((otpCode: string) => {
    console.log(otpCode);
    // make api call to verify otp code

    // fake code
    setTimeout(() => {
      navigation.pop();
      setIsVerifiedPhoneNumber(true);
    }, 2000);
  }, []);

  const handleResendOtpCode = useCallback(() => {
    console.log("resend otp code");
  }, []);

  const submitDisabled = useMemo(
    () => !isDirty || isPatchingProfessional,
    // || (phoneNumber.length > 0 && isToVerifyPhoneNumber)
    [
      isDirty,
      isPatchingProfessional,
      //  isToVerifyPhoneNumber, phoneNumber
    ],
  );

  const startImageUpload = useCallback(
    async (image: Asset) => {
      mediaManagerSingleton.imageData = await convertImageToBlob(image.uri!);

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

  const triggerProfileEditSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchProfessionalsMe.request({
            name: data.name,
            lastName: data.lastName,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
            phone: `${data.phonePrefix.split("+").join("")} ${
              data.phoneNumber
            }`,
            alboId: data.professionalRegistrationNumber,
            country: data.country,
            gender: data.gender,
            city: data.province,
            professionalPaperPhotoId: uploadedImage?._id,
          }),
        );
      }),
    [dispatch, handleSubmit, uploadedImage],
  );

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    setIsVerifiedPhoneNumber(false);
  }, [phoneNumber]);

  return {
    formData,
    countryOptions,
    phonePrefixOptions,
    genderOptions,
    submitDisabled,
    isPatchingProfessional,
    triggerProfileEditSubmit,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    handleGoBackFromOtpVerification,
    handleOtpVerification,
    handleResendOtpCode,
    startImageUpload,
  };
};
