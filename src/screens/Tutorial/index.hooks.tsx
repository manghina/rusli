import { useCallback, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import tutorialImage1 from "@assets/img/doc11.png";
import tutorialImage2 from "@assets/img/doc9.png";
import tutorialImage3 from "@assets/img/doc15.png";
import { ICarouselInstance } from "react-native-reanimated-carousel";

const intervalBetweenImages = 5000;
const scrollAnimationDuration = 750;

const fillConfig = {
  toValue: 1,
  duration: intervalBetweenImages,
  useNativeDriver: true,
  easing: (t: number) => t,
};

const scaleConfig = {
  toValue: 1.1,
  duration: intervalBetweenImages,
  useNativeDriver: true,
};

const bgImages = [tutorialImage1, tutorialImage2, tutorialImage3];

const subtitles: string[] = [
  "Se stai male\ntu non sei tu",
  "Torna ad essere te stesso",
  "Il Medico giusto, quando serve",
];

export const useTutorialScreen = () => {
  const imagesCarouselRef = useRef<ICarouselInstance>(null);
  const subtitlesCarouselRef = useRef<ICarouselInstance>(null);

  const fill1Anim = useRef(new Animated.Value(0)).current;
  const fill2Anim = useRef(new Animated.Value(0)).current;
  const fill3Anim = useRef(new Animated.Value(0)).current;

  const scale1Anim = useRef(new Animated.Value(1)).current;
  const scale2Anim = useRef(new Animated.Value(1)).current;
  const scale3Anim = useRef(new Animated.Value(1)).current;

  const fillAnimations = [fill1Anim, fill2Anim, fill3Anim];
  const scaleAnimations = [scale1Anim, scale2Anim, scale3Anim];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const [showRegisterBottomSheet, setShowRegisterBottomSheet] = useState(false);
  const [showLoginBottomSheet, setShowLoginBottomSheet] = useState(false);

  const fill1 = useCallback(() => {
    Animated.timing(fill1Anim, fillConfig).start();
  }, [fill1Anim]);

  const fill2 = useCallback(() => {
    Animated.timing(fill2Anim, fillConfig).start();
  }, [fill2Anim]);

  const fill3 = useCallback(() => {
    Animated.timing(fill3Anim, fillConfig).start();
  }, [fill3Anim]);

  const scale1 = useCallback(() => {
    Animated.timing(scale1Anim, scaleConfig).start();
  }, [scale1Anim]);
  const scale2 = useCallback(() => {
    Animated.timing(scale2Anim, scaleConfig).start();
  }, [scale2Anim]);
  const scale3 = useCallback(() => {
    Animated.timing(scale3Anim, scaleConfig).start();
  }, [scale3Anim]);

  const resetFillAnimations = useCallback(() => {
    fill1Anim.setValue(0);
    fill2Anim.setValue(0);
    fill3Anim.setValue(0);
  }, [fill1Anim, fill2Anim, fill3Anim, scale1Anim, scale2Anim, scale3Anim]);

  const onRegisterButtonClick = useCallback(() => {
    setShowRegisterBottomSheet(true);
    if (showLoginBottomSheet) {
      setShowLoginBottomSheet(false);
    }
  }, [
    setShowRegisterBottomSheet,
    setShowLoginBottomSheet,
    showLoginBottomSheet,
  ]);

  const onRegisterClose = useCallback(() => {
    setShowRegisterBottomSheet(false);
  }, [setShowRegisterBottomSheet]);

  const onLoginButtonClick = useCallback(() => {
    setShowLoginBottomSheet(true);
    if (showRegisterBottomSheet) {
      setShowRegisterBottomSheet(false);
    }
  }, [
    setShowLoginBottomSheet,
    setShowRegisterBottomSheet,
    showRegisterBottomSheet,
  ]);

  const onLoginClose = useCallback(() => {
    setShowLoginBottomSheet(false);
  }, [setShowLoginBottomSheet]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === bgImages.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, intervalBetweenImages);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    switch (carouselIndex) {
      case 0:
        resetFillAnimations();
        fill1();
        scale1();

        setTimeout(() => {
          scale3Anim.setValue(1);
        }, scrollAnimationDuration);
        break;
      case 1:
        fill2();
        scale2();

        setTimeout(() => {
          scale1Anim.setValue(1);
        }, scrollAnimationDuration);
        break;
      case 2:
        fill3();
        scale3();

        setTimeout(() => {
          scale2Anim.setValue(1);
        }, scrollAnimationDuration);
        break;
    }

    if (imagesCarouselRef.current) {
      imagesCarouselRef.current.scrollTo({
        index: carouselIndex,
        animated: true,
      });
    }

    if (subtitlesCarouselRef.current) {
      subtitlesCarouselRef.current.scrollTo({
        index: carouselIndex,
        animated: true,
      });
    }
  }, [
    carouselIndex,
    fill1,
    fill2,
    fill3,
    scale1,
    scale2,
    scale3,
    scale1Anim,
    scale2Anim,
    scale3Anim,
    resetFillAnimations,
  ]);

  useEffect(() => {
    fill1();
    scale1();
  }, [fill1, scale1, resetFillAnimations]);

  return {
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
  };
};
