import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  container: {
    gap: dimensionsTokens.paddingMd,
  },
  headingContainer: {
    gap: dimensionsTokens.padding4Xs,
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  subTitle: {
    ...textVariants.p1MediumNormal,
  },
  contentContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  bioFieldContainer: {
    height: 156,
  },
  ctaContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  ctaText: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
  },
  button: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: colorTokens.colorIconDisabled,
  },
  secondPartHeadingContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  secondPartHeading: {
    ...textVariants.h6CondensedBlackNormal,
  },
  secondPartSubtitle: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  secondPartLocationContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  secondPartLocationHeadingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  secondPartLocationHeading: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
});
