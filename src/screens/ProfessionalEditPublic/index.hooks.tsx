import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import * as yup from "yup";
import { professionsOptions } from "./constantData";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Professional } from "@app/models/Professional";
import { addressSchema } from "@app/models/Address/validations";
import { initialAddressValues } from "@app/models/Address/constantData";

interface ProfessionalEditPublicFormData {
  bio?: string;
  specialization: string[];
  skillsetDescription?: string;
  website?: string;
  document?: string;
  officeLocations: {
    address: any;
    phone: string;
  }[];
}

const schema = yup.object().shape({
  bio: yup.string().optional(),
  specialization: yup
    .array()
    .of(yup.string().required())
    .required("Inserisci la tua specializzazione"),
  skillsetDescription: yup.string().optional(),
  website: yup.string().optional(),
  document: yup.string().optional(),
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
});

export const useProfessionalEditPublicScreen = () => {
  const dispatch = useDispatch();

  const me = useSelector(selectors.getMe) as Professional | null;
  const isPatchingProfessional = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchProfessionalsMe.api),
  );

  const defaultValues = useMemo(
    () => ({
      bio: me?.bio || undefined,
      specialization: me?.specializations || undefined,
      skillsetDescription: me?.specializationsDescription || undefined,
      website: me?.website || undefined,
      document: me?.document || undefined,
      officeLocations: me?.officeLocations || [],
    }),
    [me],
  );

  const formData = useForm<ProfessionalEditPublicFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = formData;

  const {
    fields: officeLocationsFields,
    append: officeLocationsAppend,
    remove: officeLocationsRemove,
  } = useFieldArray({
    name: "officeLocations",
    control,
  });

  const [specialization] = useWatch({
    control,
    name: "specialization",
  });

  const submitDisabled = useMemo(
    () => !isDirty || isPatchingProfessional,
    [isDirty, isPatchingProfessional],
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

  const onRemoveOfficeCallbacks = useMemo(
    () =>
      officeLocationsFields.map((_, index) => () => {
        officeLocationsRemove(index);
      }),
    [officeLocationsFields, officeLocationsRemove],
  );

  const triggerProfileEditSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchProfessionalsMe.request({
            bio: data.bio,
            specializations: macroSpecializations.length
              ? macroSpecializations
              : undefined,
            specializationsDescription: data.skillsetDescription,
            website: data.website,
            document: data.document,
            officeLocations: data.officeLocations.filter((officeLocation) =>
              Boolean(officeLocation.address.description),
            ),
          }),
        );
      }),
    [dispatch, handleSubmit, macroSpecializations],
  );

  const onAddOfficePressed = useCallback(
    () =>
      officeLocationsAppend({
        address: initialAddressValues,
        phone: "",
      }),
    [officeLocationsAppend],
  );

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return {
    formData,
    triggerProfileEditSubmit,
    submitDisabled,
    isPatchingProfessional,
    professionsOptions,
    officeLocationsFields,
    onAddOfficePressed,
    onRemoveOfficeCallbacks,
  };
};
