import { Dimensions, StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  pageContainer: {
    padding: dimensionsTokens.paddingMd,
    justifyContent: "space-between",
    height: "100%",
  },
  pageHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitlesCarouselContainer: { height: 140 },
  animationBarBackground: {
    width: 4,
    height: 34,
    backgroundColor: "#FFF",
    borderRadius: 1,
  },
  defaultAnimatedBarStyles: {
    position: "absolute",
    width: 4,
    height: "100%",
    backgroundColor: "#3C77E8",
    borderRadius: 1,
    bottom: 0,
    transformOrigin: "bottom",
  },
  background: {
    width,
    height,
    overflow: "hidden",
  },
  renderTitleItemBack: {
    width: width - 40,
    height: 140,
    justifyContent: "center",
  },
  subtitle: {
    ...textVariants.h3BoldNormal,
    color: colorTokens.colorTextInverse,
    textAlign: "center",
  },
  backgroundImageCarousel: {
    position: "absolute",
  },
  tutorialScreenMainLabel: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#FFF",
  },
  progressBarsContainer: { gap: 5 },

  titleLabel: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "normal",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: dimensionsTokens.paddingXs,
  },
  ctaButton: {
    flex: 1,
  },
});
