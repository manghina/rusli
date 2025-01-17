import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  otpContainer: {
    gap: dimensionsTokens.paddingMd,
  },
  otpHeading: {
    gap: dimensionsTokens.padding4Xs,
  },
  otpTitle: {
    ...textVariants.h3CondensedBlackNormal,
  },
  otpDescription: {
    ...textVariants.p1MediumNormal,
  },
  codeContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  codeReceivedByEmailText: {
    ...textVariants.p2MediumNormal,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  otpInputItem: {
    width: 44,
  },
  otpErrorText: {
    ...textVariants.p2MediumNormal,
    color: "#FF0000",
    textAlign: "center",
  },
  otpTextContainer: {
    padding: dimensionsTokens.padding4Xs,
  },
  otpTimerText: {
    ...textVariants.p2MediumNormal,
    textAlign: "center",
    color: colorTokens.colorTextDisabled,
  },
  otpResetContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: dimensionsTokens.padding4Xs,
  },
  otpResetText: {
    ...textVariants.p2MediumNormal,
  },
  otpResetCta: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextAccentBlue,
  },
  otpGoBackContainer: {
    alignSelf: "center",
  },
  otpGoBack: {
    ...textVariants.p2MediumNormal,
    padding: dimensionsTokens.padding2Xs,
    textDecorationLine: "underline",
  },
  otpGoBackDisabled: {
    color: colorTokens.colorTextDisabled,
  },
});
