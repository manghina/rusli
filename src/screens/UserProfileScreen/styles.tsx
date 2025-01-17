import { colorTokens } from "@app/theme/colors/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colorTokens.colorBorderInverse,
    backgroundColor: colorTokens.colorBackgroundNeutral,
    justifyContent: "center",
    alignItems: "center",
  },
  accentBackground: {
    backgroundColor: colorTokens.colorBackgroundAccentMagentaSubtle,
  },
  profileInfoContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: dimensionsTokens.paddingMd,
    gap: dimensionsTokens.paddingXs,
  },
  profileImageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImageTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageText: {
    ...textVariants.h1MediumNormal,
    color: colorTokens.colorTextInverse,
    textAlign: "center",
  },
  loadingIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  editImageButton: {
    position: "absolute",
    bottom: -10,
    right: -10,
  },
  iconDisabled: {
    color: colorTokens.colorIconInverse,
  },
  profileInfoText: {
    ...textVariants.h5BoldItalic,
  },
  menuContainer: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  menuCategory: {
    flexDirection: "column",
    gap: dimensionsTokens.padding3Xs,
  },
  menuCatergoryTitle: {
    ...textVariants.h6CondensedBlackNormal,
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
