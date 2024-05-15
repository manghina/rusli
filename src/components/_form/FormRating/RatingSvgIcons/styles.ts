import { StyleSheet } from "react-native";
import { dimensionsTokens } from "../../../../theme/spacings/tokens";
import { colorTokens } from "../../../../theme/colors/tokens";

export const styles = StyleSheet.create({
  container: {
    padding: dimensionsTokens.paddingXs / 3,
    borderRadius: 99,
    backgroundColor: colorTokens.elevationSurface,
  },
  selectedContainer: {
    backgroundColor: colorTokens.colorBackgroundSelectedBold,
  },
});
