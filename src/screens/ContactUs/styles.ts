import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containter: {
    gap: dimensionsTokens.paddingMd,
  },
  headingContainer: {
    gap: dimensionsTokens.padding4Xs,
  },
  headingTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  headingSubtitle: {
    color: colorTokens.colorTextSubtle,
  },
  contentContainer: {
    gap: dimensionsTokens.paddingXs,
  },
  ctaContainer: {
    gap: dimensionsTokens.padding3Xs,
    paddingTop: dimensionsTokens.padding3Xs,
  },
  ctaText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtlest,
    textAlign: "center",
  },
  ctaButton: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
});
