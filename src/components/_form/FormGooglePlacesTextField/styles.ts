import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { colorTokens } from "@app/theme/colors/tokens";
import { withOpacity } from "@app/theme/colors/palette";

export const styles = StyleSheet.create({
  fieldContainer: {
    display: "flex",
    gap: dimensionsTokens.padding3Xs,
  },
  field: {
    borderColor: withOpacity(colorTokens.colorBorderAccentGrayBolder, 0.15),
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: colorTokens.colorBackgroundInput,
    alignItems: "center",
    paddingRight: dimensionsTokens.padding3Xs,
  },
  fieldWithError: {
    borderColor: "#FF0000",
  },
  input: {
    flex: 1,
    paddingTop: dimensionsTokens.paddingXs,
    paddingLeft: dimensionsTokens.paddingXs,
    paddingRight: dimensionsTokens.paddingXs,
    paddingBottom: dimensionsTokens.paddingXs,
    marginBottom: 0,
  },
  focused: {
    borderColor: colorTokens.colorBorderAccentBlue,
  },
  label: { ...textVariants.p2MediumNormal },
  listView: {
    backgroundColor: colorTokens.colorBackgroundDisabled,
    borderRadius: 8,
    marginTop: dimensionsTokens.padding3Xs,
    borderWidth: 1,
    borderColor: withOpacity(colorTokens.colorBorderAccentGrayBolder, 0.15),
  },
  listRow: {
    backgroundColor: "transparent",
  },
  poweredByGoogleContainer: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  noResultsContainer: {
    paddingHorizontal: dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.padding2Xs,
  },
  noResultsText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDisabled,
  },
  textError: {
    ...textVariants.p3MediumNormal,
    color: "#FF0000",
  },
});
