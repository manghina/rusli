import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  stepContent: {
    gap: dimensionsTokens.paddingXs,
  },
  fieldsColumn: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  phoneNumberLabel: {
    ...textVariants.p2MediumNormal,
    marginBottom: dimensionsTokens.padding3Xs,
  },
  phoneInputContainer: { width: "100%" },
  phonePrefixContainer: { width: "25%" },
  phonePrefix: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  phoneNumberContainer: {
    width: "75%",
  },
  phoneNumber: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  stepperControlsContainer: {
    alignItems: "center",
    gap: dimensionsTokens.paddingXs,
    // paddingBottom: dimensionsTokens.paddingMd,
  },
  stepperControlMainActionContainer: {
    alignItems: "center",
    width: "100%",
    gap: dimensionsTokens.padding3Xs,
  },
  callToAction: {
    width: "100%",
  },
  goBackText: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
  locationContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  locationHeadingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  locationHeading: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  locationRemoveText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDanger,
    textDecorationLine: "underline",
  },
  addLocationContainer: {
    gap: dimensionsTokens.padding3Xs,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: dimensionsTokens.padding2Xs,
  },
  addLocationQuestion: {
    ...textVariants.p2MediumNormal,
  },
  addLocationText: {
    ...textVariants.p2MediumItalic,
    textAlign: "center",
    color: colorTokens.colorTextInformation,
  },
});
