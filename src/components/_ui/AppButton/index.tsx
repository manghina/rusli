import { Text, TouchableOpacity, View, ViewProps } from "react-native-ui-lib";
import { FC } from "react";
import { styles } from "./styles";
import { ActivityIndicator, TextStyle, ViewStyle } from "react-native";

type AppButtonProps = {
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  variant?: "contained" | "outlined" | "text" | "link";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  underline?: boolean;
  hideBorder?: boolean;
  onPress?: () => void;
  label?: string;
  buttonStyle?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle | TextStyle[];
} & ViewProps;

export const AppButton: FC<AppButtonProps> = ({
  color = "primary",
  variant = "contained",
  size = "medium",
  disabled = false,
  loading = false,
  underline = false,
  hideBorder = false,
  onPress,
  label,
  buttonStyle,
  labelStyle,
  ...props
}) => {
  const buttonStyles: ViewStyle[] = [styles.button];
  const labelStyles: TextStyle[] = [];

  switch (size) {
    case "small":
      buttonStyles.push(styles.buttonSmall);
      labelStyles.push(styles.labelSmall);
      break;
    case "medium":
      buttonStyles.push(styles.buttonMedium);
      labelStyles.push(styles.labelMedium);
      break;
    case "large":
      buttonStyles.push(styles.buttonLarge);
      labelStyles.push(styles.labelLarge);
      break;
    default:
      break;
  }

  switch (variant) {
    case "contained":
      if (disabled || loading) {
        buttonStyles.push(styles.variantContainedDisabled);
        labelStyles.push(styles.labelContainedDisabled);
      } else {
        switch (color) {
          case "primary":
            buttonStyles.push(styles.variantContainedPrimary);
            labelStyles.push(styles.labelContainedPrimary);
            break;
          case "secondary":
            buttonStyles.push(styles.variantContainedSecondary);
            labelStyles.push(styles.labelContainedSecondary);
            break;
          case "success":
            buttonStyles.push(styles.variantContainedSuccess);
            labelStyles.push(styles.labelContainedSuccess);
            break;
          case "warning":
            buttonStyles.push(styles.variantContainedWarning);
            labelStyles.push(styles.labelContainedWarning);
            break;
          case "error":
            buttonStyles.push(styles.variantContainedError);
            labelStyles.push(styles.labelContainedError);
            break;
          case "info":
            buttonStyles.push(styles.variantContainedInfo);
            labelStyles.push(styles.labelContainedInfo);
            break;
        }
      }
      break;
    case "outlined":
      if (!hideBorder) {
        buttonStyles.push(styles.variantOutlined);
      }

      switch (color) {
        case "primary":
          buttonStyles.push(styles.variantOutlinedPrimary);
          labelStyles.push(styles.labelOutlinedPrimary);
          break;
        case "secondary":
          buttonStyles.push(styles.variantOutlinedSecondary);
          labelStyles.push(styles.labelOutlinedSecondary);
          break;
        case "success":
          buttonStyles.push(styles.variantOutlinedSuccess);
          labelStyles.push(styles.labelOutlinedSuccess);
          break;
        case "warning":
          buttonStyles.push(styles.variantOutlinedWarning);
          labelStyles.push(styles.labelOutlinedWarning);
          break;
        case "error":
          buttonStyles.push(styles.variantOutlinedError);
          labelStyles.push(styles.labelOutlinedError);
          break;
        case "info":
          buttonStyles.push(styles.variantOutlinedInfo);
          labelStyles.push(styles.labelOutlinedInfo);
          break;
      }
      break;
    case "text":
    case "link":
      buttonStyles.push(styles.variantText);
      switch (color) {
        case "primary":
          labelStyles.push(styles.labelTextPrimary);
          break;
        case "secondary":
          labelStyles.push(styles.labelTextSecondary);
          break;
        case "success":
          labelStyles.push(styles.labelTextSuccess);
          break;
        case "warning":
          labelStyles.push(styles.labelTextWarning);
          break;
        case "error":
          labelStyles.push(styles.labelTextError);
          break;
        case "info":
          labelStyles.push(styles.labelTextInfo);
          break;
      }
      switch (size) {
        case "small":
          buttonStyles.push(styles.buttonSmall);

          if (variant === "link") {
            labelStyles.push(styles.labelLinkSmall);
          } else {
            labelStyles.push(styles.labelTextSmall);
          }

          break;
        case "medium":
          buttonStyles.push(styles.buttonMedium);

          if (variant === "link") {
            labelStyles.push(styles.labelLinkMedium);
          } else {
            labelStyles.push(styles.labelTextMedium);
          }

          break;
        case "large":
          buttonStyles.push(styles.buttonLarge);

          if (variant === "link") {
            labelStyles.push(styles.labelLinkLarge);
          } else {
            labelStyles.push(styles.labelTextLarge);
          }

          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  if (underline) {
    labelStyles.push(styles.underline);
  }

  if (buttonStyle) {
    if (Array.isArray(buttonStyle)) {
      buttonStyles.push(...buttonStyle);
    } else {
      buttonStyles.push(buttonStyle);
    }
  }

  if (labelStyle) {
    if (Array.isArray(labelStyle)) {
      labelStyles.push(...labelStyle);
    } else {
      labelStyles.push(labelStyle);
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={["text", "link"].includes(variant) ? {} : { width: "100%" }}
    >
      <View style={buttonStyles} {...props}>
        {loading && <ActivityIndicator />}
        <Text style={labelStyles}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
