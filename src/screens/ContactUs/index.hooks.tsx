import * as yup from "yup";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

interface ContactUsFormData {
  message: string;
}

const schema = yup.object().shape({
  message: yup.string().required("Inserisci un messaggio"),
});

export const useContactUsScreen = () => {
  const dispatch = useDispatch();

  const formData = useForm<ContactUsFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = formData;

  const canSubmit = isDirty;

  const triggerSendContactUsMessage = useMemo(
    () =>
      handleSubmit((data) => {
        // dispatch(
        //   actions.sendContactUsMessage.request({
        //     message: data.message,
        //   }),
        // );
      }),
    [handleSubmit],
  );

  return {
    formData,
    triggerSendContactUsMessage,
    canSubmit,
  };
};
