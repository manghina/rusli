import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  subtitle: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  formContainter: {
    gap: dimensionsTokens.paddingXs,
  },
  actionContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  saveConfirmationText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtlest,
    textAlign: "center",
  },
});
