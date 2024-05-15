import { memo } from "react";
import { FormTextField } from "../FormTextField";
import { styles } from "./styles";

type FormTextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  textAreaHeight?: number;
  disabled?: boolean;
};

export const FormTextArea = memo(
  ({
    name,
    label,
    placeholder,
    textAreaHeight,
    disabled,
  }: FormTextAreaProps) => {
    return (
      <FormTextField
        name={name}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        multiline
        fieldStyle={[
          styles.fieldContainer,
          textAreaHeight ? { height: textAreaHeight } : undefined,
        ]}
      />
    );
  },
);
