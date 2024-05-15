import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokensLight } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    backgroundColor: colorTokensLight.elevationSurfaceAlternative,
    padding: dimensionsTokens.paddingSm,
  },
  mainContent: {
    gap: dimensionsTokens.padding6Xl,
  },
  pageContent: { gap: dimensionsTokens.paddingSm },
  animation: { width: "100%", height: 300 },
  button: {
    width: "100%",
    borderWidth: 0,
    //marginTop: 6 * dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  title: {
    color: colorTokensLight.colorTextAlternative,
    textAlign: "center",
    ...textVariants.h3CondensedBlackNormal,
  },
  text: {
    color: colorTokensLight.colorTextAlternativeSubtlest,
    textAlign: "center",
    ...textVariants.p1MediumNormal,
  },
  actionsContainer: {
    gap: dimensionsTokens.paddingXs,
  },
});
