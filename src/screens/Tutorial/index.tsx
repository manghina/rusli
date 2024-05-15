import React from "react";
import { Animated, Dimensions, SafeAreaView } from "react-native";
import { Button, Text, View } from "react-native-ui-lib";
import Carousel from "react-native-reanimated-carousel";

import { RegisterBottomSheet } from "@app/components/RegisterBottomSheet";
import { LoginBottomSheet } from "@app/components/LoginBottomSheet";

import { useTutorialScreen } from "./index.hooks";
import { styles } from "./styles";
import { AppButton } from "@app/components/_ui/AppButton";
import SweepLogoSvg from "@app/components/SweepLogoSvg";
import { colorTokens } from "@app/theme/colors/tokens";

const { width, height } = Dimensions.get("window");

export const TutorialScreen = () => {
  const {
    imagesCarouselRef,
    subtitlesCarouselRef,
    scrollAnimationDuration,
    bgImages,
    subtitles,
    fillAnimations,
    scaleAnimations,
    onRegisterButtonClick,
    onLoginButtonClick,
    onRegisterClose,
    onLoginClose,
    showRegisterBottomSheet,
    showLoginBottomSheet,
  } = useTutorialScreen();

  const data: number[] = [...new Array(bgImages.length).keys()];

  // Function to render each item in the carousel
  const renderItem = ({
    item,
    scale,
  }: {
    item: number;
    scale: Animated.Value;
  }) => {
    return (
      <View style={styles.background}>
        <Animated.Image
          source={bgImages[item]}
          style={{
            width: "100%",
            height: "100%",
            transform: [
              {
                scale,
              },
            ],
          }}
        />
      </View>
    );
  };

  const renderCarouselSubtitle = ({ item }: { item: number }) => {
    return (
      <View style={[styles.renderTitleItemBack]}>
        <Text style={styles.subtitle}>{subtitles[item]}</Text>
      </View>
    );
  };

  const renderProgressBars = () => (
    <View style={styles.progressBarsContainer}>
      {fillAnimations.reverse().map((progress, index) => (
        <View key={index}>
          <View style={styles.animationBarBackground} />
          {/*Progress bar*/}
          <Animated.View
            style={[
              styles.defaultAnimatedBarStyles,
              {
                // Bind height to animated value
                transform: [
                  {
                    scaleY: progress,
                  },
                ],
              },
            ]}
          />
        </View>
      ))}
    </View>
  );

  return (
    <View>
      <Carousel
        ref={imagesCarouselRef}
        vertical
        height={height}
        data={data}
        enabled={false}
        scrollAnimationDuration={scrollAnimationDuration}
        style={styles.backgroundImageCarousel}
        renderItem={({ item }) =>
          renderItem({ item, scale: scaleAnimations[item] })
        }
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.pageContainer}>
          <View style={styles.pageHeading}>
            <SweepLogoSvg size={32} color={colorTokens.colorTextInverse} />
            {renderProgressBars()}
          </View>
          <View>
            <View style={styles.subtitlesCarouselContainer}>
              <Carousel
                ref={subtitlesCarouselRef}
                loop
                vertical
                enabled={false}
                height={140}
                data={data}
                scrollAnimationDuration={scrollAnimationDuration}
                renderItem={renderCarouselSubtitle}
              />
            </View>
            <View style={styles.actionsContainer}>
              <View style={styles.ctaButton}>
                <AppButton
                  variant="contained"
                  color="primary"
                  onPress={onRegisterButtonClick}
                  label="Registrati"
                />
              </View>
              <View style={styles.ctaButton}>
                <AppButton
                  variant="outlined"
                  color="secondary"
                  onPress={onLoginButtonClick}
                  label="Accedi"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <RegisterBottomSheet
        onLoginButtonPressed={onLoginButtonClick}
        showRegisterBottomSheet={showRegisterBottomSheet}
        onRegisterClose={onRegisterClose}
      />
      <LoginBottomSheet
        onRegisterButtonPressed={onRegisterButtonClick}
        showLoginBottomSheet={showLoginBottomSheet}
        onLoginClose={onLoginClose}
      />
    </View>
  );
};

TutorialScreen.displayName = "TutorialScreen";
TutorialScreen.RouteName = "tutorial" as const;
