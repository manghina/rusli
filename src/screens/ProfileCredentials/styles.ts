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
  formContainter: {
    gap: dimensionsTokens.paddingXs,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});
