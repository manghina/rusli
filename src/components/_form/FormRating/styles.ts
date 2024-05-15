import { StyleSheet } from "react-native";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: dimensionsTokens.paddingXs / 3,
    justifyContent: "space-between",
    width: "100%",
  },
  optionContainer: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    borderRadius: dimensionsTokens.padding3Xs,
    paddingVertical: dimensionsTokens.paddingXs,
    paddingHorizontal: dimensionsTokens.paddingXs,
  },
  optionContainerSelected: {
    backgroundColor: colorTokens.colorBackgroundNeutralBold,
  },
});
