import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colorTokens.elevationSurface,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: dimensionsTokens.paddingSm,
    paddingTop: dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXl,
  },
});
