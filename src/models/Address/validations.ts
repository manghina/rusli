import * as yup from "yup";

export const addressSchema = () =>
  yup
    .object()
    .shape({
      description: yup.string().required(),
      addressComponents: yup.mixed().required(),
      geometry: yup.mixed().required(),
      url: yup.string().required(),
    })
    .test(({ description }, context) => {
      if (!description || description === "") {
        return new yup.ValidationError(
          "Inserisci l'indirizzo dell'ufficio",
          description,
          context.path,
        );
      }
      return true;
    });
