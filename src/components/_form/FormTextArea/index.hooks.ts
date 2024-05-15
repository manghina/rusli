import useFormField from "../../../hooks/useFormField";

export const useFormTextArea = (name: string) => {
  const { value, setValue, error } = useFormField<string>({ name });
  return { value, setValue, error };
};
