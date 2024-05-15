import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: dimensionsTokens.padding3Xs,
  },
  label: { alignSelf: "center", ...textVariants.p2MediumNormal },
  button: {
    paddingVertical: dimensionsTokens.paddingXs,
  },
  buttonText: {
    ...textVariants.p2MediumNormal,
    color: "#FFF",
  },
  activityIndicator: { marginRight: 5 },
});
