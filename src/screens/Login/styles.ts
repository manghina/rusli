import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { FontSizes } from "@app/theme/typographies/properties";

export const styles = StyleSheet.create({
  container: {
    gap: dimensionsTokens.paddingXs,
  },
  mainActionContainer: {
    display: "flex",
    gap: dimensionsTokens.padding3Xs,
  },
  mainActionLabel: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  secondaryActionContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingTop: dimensionsTokens.paddingMd,
  },
  secondaryActionText: { ...textVariants.p2MediumNormal },
  secondaryActionLink: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorTextLink,
  },
  textDisabled: { color: colorTokens.colorTextDisabled },
  button: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  buttonText: {
    fontSize: FontSizes.P1,
    color: colorTokens.colorTextInverse,
  },
  loadingAnimation: {
    width: "100%",
    height: 20, //FontSizes.H6,
  },
});
