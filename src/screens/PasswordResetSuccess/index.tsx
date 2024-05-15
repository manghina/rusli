import React from "react";
import { View, Text } from "react-native-ui-lib";
import { usePasswordResetSuccessScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { AppButton } from "@app/components/_ui/AppButton";

export const PasswordResetSuccessScreen = () => {
  const { handleButtonPress, shouldGoToHomeScreen } =
    usePasswordResetSuccessScreen();

  return (
    <View style={styles.pageContainer}>
      <LottieView
        source={require("../../../assets/animations/confetti.json")}
        autoPlay
        speed={0.6}
        loop={false}
        style={styles.animationContainer}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentTopContainer}>
          <Text style={styles.title}>Congratulazioni!</Text>
          <Text style={styles.text}>
            Ottima scelta!{"\n"}
            La tua nuova password è davvero perfetta!
          </Text>
        </View>
        <AppButton
          label={shouldGoToHomeScreen ? "Torna alla home" : "Accedi"}
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
};

PasswordResetSuccessScreen.displayName = "PasswordResetSuccessScreen";
PasswordResetSuccessScreen.RouteName = "password-reset-success" as const;
