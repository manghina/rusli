import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  pageContainer: {
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingMd,
  },
  pageTitleText: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pageSubtitleText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  contentWrapper: {
    gap: dimensionsTokens.paddingXs,
  },
  patientContainer: {},
  actionLabel: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  rejectActionLabel: {
    color: colorTokens.colorTextInverse,
  },
  profilePic: {
    width: 48.6,
    height: 48.6,
    marginRight: 10,
    borderRadius: 50,
  },
  requestContainer: {
    borderRadius: 8,
    padding: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  ButtonsSection: {
    alignItems: "center",
    gap: dimensionsTokens.padding3Xs,
  },
  buttonGray: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundNeutral,
    color: colorTokens.colorTextDefault,
  },
  buttonRed: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundDangerBold,
    color: colorTokens.colorTextInverse,
  },
  section: {
    gap: dimensionsTokens.padding3Xs,
  },
  sectionContainer: {
    padding: dimensionsTokens.paddingXs,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    gap: dimensionsTokens.paddingXs,
  },
  sectionElement: {
    gap: dimensionsTokens.padding3Xs,
  },
  sectionName: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  statusMainWrapper: {
    gap: dimensionsTokens.padding3Xs,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: dimensionsTokens.padding3Xs,
  },
  statusTitleContainer: {
    flex: 1,
  },
  statusTitle: {
    ...textVariants.p1BoldNormal,
  },
  statusSubtitle: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorTextSubtle,
  },
  statusIconContainer: {
    paddingHorizontal: dimensionsTokens.paddingXs,
    paddingVertical: dimensionsTokens.padding3Xs,
    borderRadius: 8,
  },
  readyToBeAcceptedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundWarning,
  },
  acceptedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundSuccess,
  },
  rejectedIconContainer: {
    backgroundColor: colorTokens.colorBackgroundDanger,
  },
  pText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  patientName: {
    ...textVariants.p1CondensedBoldNormal,
  },
  patientAge: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextInformation,
  },
  patientIllness: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextInformation,
  },
  requestSummaryContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  requestSummaryText: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextDefault,
  },
  rejectionHeaderText: {
    ...textVariants.h3CondensedBlackNormal,
    color: colorTokens.colorTextDanger,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colorTokens.colorBorder,
  },
  slotContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  optionCounterText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  optionDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionDateText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDefault,
  },
  optionDayAndTimeText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  optionPrice: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  appointmentDetailsContainer: {
    gap: dimensionsTokens.padding3Xs,
  },
  actionsContainer: {
    paddingTop: dimensionsTokens.paddingSm,
  },
  actionsDescription: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorTextDefault,
    textAlign: "center",
  },
  dangerButton: {
    backgroundColor: colorTokens.colorBackgroundDanger,
    paddingVertical: dimensionsTokens.paddingXs,
  },
  dangerButtonText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextDanger,
  },
});
