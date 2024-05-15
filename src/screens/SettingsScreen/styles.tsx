import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const userProfileStyles = StyleSheet.create({
  menuContainer: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  menuCategory: {
    flexDirection: "column",
    gap: dimensionsTokens.padding3Xs,
  },
  menuCatergoryTitle: {
    ...textVariants.h3CondensedBlackNormal,
    paddingVertical: dimensionsTokens.padding3Xs,
  },
  menuItem: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    borderRadius: 8,
    flexDirection: "row",
    gap: dimensionsTokens.padding3Xs,
    alignItems: "center",
    padding: Dimensions.medium.spacing_175,
  },
  menuItemText: {
    ...textVariants.p1MediumNormal,
  },
});
