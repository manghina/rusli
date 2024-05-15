import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokens } from "@app/theme/colors/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  safeArea: { backgroundColor: colorTokens.elevationSurface },
  container: {
    marginTop: headerHeight,
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    gap: dimensionsTokens.paddingMd,
    backgroundColor: colorTokens.elevationSurface,
  },
  title: {
    color: colorTokens.colorTextDefault,
    ...textVariants.h3CondensedBlackNormal,
  },
  subtitle: {
    color: colorTokens.colorTextSubtle,
    ...textVariants.p1MediumNormal,
  },
  inputSection: {
    gap: dimensionsTokens.paddingXs,
  },
  inputTextsContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  inputTitle: {
    color: colorTokens.colorTextDefault,
    ...textVariants.h6CondensedBlackNormal,
  },
  inputDescription: {
    color: colorTokens.colorTextSubtle,
    ...textVariants.p1MediumNormal,
  },
  textArea: {
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    borderColor: colorTokens.colorBorder,
    borderWidth: 1,
    borderStyle: "solid",
    height: 156,
    borderRadius: dimensionsTokens.padding3Xs,
    textAlignVertical: "top",
  },
  textAreaDirty: { color: colorTokens.colorTextDefault },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  footerText: { ...textVariants.p1MediumNormal },
});
