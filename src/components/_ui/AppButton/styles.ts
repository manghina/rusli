import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  button: {
    padding: dimensionsTokens.paddingXs,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: dimensionsTokens.paddingXs,
  },
  variantOutlined: {
    borderWidth: 2,
  },
  variantContainedPrimary: {
    backgroundColor: colorTokens.colorBackgroundBrandBold,
  },
  variantContainedSecondary: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  variantContainedSuccess: {
    backgroundColor: colorTokens.colorBackgroundSuccess,
  },
  variantContainedWarning: {
    backgroundColor: colorTokens.colorBackgroundWarning,
  },
  variantContainedError: {
    backgroundColor: colorTokens.colorBackgroundDangerBold,
  },
  variantContainedInfo: {
    backgroundColor: colorTokens.colorBackgroundInformation,
  },
  variantContainedDisabled: {
    backgroundColor: colorTokens.colorBackgroundDisabled,
  },
  variantOutlinedPrimary: {
    borderColor: colorTokens.colorBorderBrand,
  },
  variantOutlinedSecondary: {
    borderColor: colorTokens.colorBorderAlternative,
  },
  variantOutlinedSuccess: {
    borderColor: colorTokens.colorBorderSuccess,
  },
  variantOutlinedWarning: {
    borderColor: colorTokens.colorBorderWarning,
  },
  variantOutlinedError: {
    borderColor: colorTokens.colorBorderDanger,
  },
  variantOutlinedInfo: {
    borderColor: colorTokens.colorBorderInformation,
  },
  variantText: {
    padding: 0,
  },
  buttonPrimary: {},
  buttonSecondary: {},
  buttonSuccess: {},
  buttonWarning: {},
  buttonError: {},
  buttonInfo: {},
  buttonSmall: {},
  buttonMedium: {},
  buttonLarge: {},
  labelContainedPrimary: {
    color: colorTokens.colorTextInverse,
  },
  labelContainedSecondary: {
    color: colorTokens.colorTextDefault,
  },
  labelContainedSuccess: {
    color: colorTokens.colorTextInverse,
  },
  labelContainedWarning: {
    color: colorTokens.colorTextInverse,
  },
  labelContainedError: {
    color: colorTokens.colorTextInverse,
  },
  labelContainedInfo: {
    color: colorTokens.colorTextInverse,
  },
  labelContainedDisabled: {
    color: colorTokens.colorTextDisabled,
  },
  labelOutlinedPrimary: {
    color: colorTokens.colorTextBrand,
  },
  labelOutlinedSecondary: {
    color: colorTokens.colorTextAlternative,
  },
  labelOutlinedSuccess: {
    color: colorTokens.colorTextSuccess,
  },
  labelOutlinedWarning: {
    color: colorTokens.colorTextWarning,
  },
  labelOutlinedError: {
    color: colorTokens.colorTextDanger,
  },
  labelOutlinedInfo: {
    color: colorTokens.colorTextInformation,
  },
  labelTextPrimary: {
    color: colorTokens.colorTextBrand,
  },
  labelTextSecondary: {
    color: colorTokens.colorTextDefault,
  },
  labelTextSuccess: {
    color: colorTokens.colorTextSuccess,
  },
  labelTextWarning: {
    color: colorTokens.colorTextWarning,
  },
  labelTextError: {
    color: colorTokens.colorTextDanger,
  },
  labelTextInfo: {
    color: colorTokens.colorTextInformation,
  },
  labelSmall: {
    ...textVariants.p2MediumNormal,
  },
  labelMedium: {
    ...textVariants.p1MediumNormal,
  },
  labelLarge: {
    ...textVariants.h6MediumNormal,
  },
  labelTextSmall: {
    ...textVariants.p2MediumNormal,
  },
  labelLinkSmall: {
    ...textVariants.p2MediumItalic,
  },
  labelTextMedium: {
    ...textVariants.p1MediumNormal,
  },
  labelLinkMedium: {
    ...textVariants.p1MediumItalic,
  },
  labelTextLarge: {
    ...textVariants.h6MediumNormal,
  },
  labelLinkLarge: {
    ...textVariants.h6MediumItalic,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
