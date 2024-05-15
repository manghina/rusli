import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

interface UserEditPasswordFormData {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

const schema = yup.object().shape({
  password: yup.string().required("Inserisci la tua password"),
  newPassword: yup
    .string()
    .password()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .max(50, "La password deve essere di al massimo 50 caratteri")
    .minLowercase(1, "La password deve contenere almeno una lettera minuscola")
    .minUppercase(1, "La password deve contenere almeno una lettera maiuscola")
    .minNumbers(1, "La password deve contenere almeno un numero")
    .minSymbols(1, "La password deve contenere almeno un simbolo")
    .required("Inserisci la tua nuova password"),
  confirmNewPassword: yup
    .string()
    .required("Conferma la tua nuova password")
    .oneOf([yup.ref("newPassword")], "Le password non corrispondono"),
});

export const useProfileEditPasswordScreen = () => {
  const dispatch = useDispatch();

  const formData = useForm<UserEditPasswordFormData>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = formData;

  const isPatchingAccount = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchAccountsMe.api),
  );

  const submitDisabled =
    !isDirty || (isSubmitted && !isValid) || isPatchingAccount;

  const triggerEditPassword = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchAccountsMePassword.request({
            currentPassword: data.password,
            newPassword: data.newPassword,
          }),
        );
      }),
    [handleSubmit],
  );

  return { triggerEditPassword, formData, submitDisabled, isPatchingAccount };
};
