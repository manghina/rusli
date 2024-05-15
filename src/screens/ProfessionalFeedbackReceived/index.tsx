import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { usePasswordResetSuccessScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { AppButton } from "@app/components/_ui/AppButton";

export const ProfessionalFeedbackReceivedScreen = () => {
  const { onContinueButtonPressed } = usePasswordResetSuccessScreen();

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
          <Text style={styles.title}>Evviva!</Text>
          <Text style={styles.text}>
            Sweep è migliorato grazie a Lei! Si prepari per la prossima
            richiesta di assistenza!
          </Text>
        </View>
        <AppButton label="Avanti" onPress={onContinueButtonPressed} />
      </View>
    </View>
  );
};

ProfessionalFeedbackReceivedScreen.displayName =
  "ProfessionalFeedbackReceivedScreen";
ProfessionalFeedbackReceivedScreen.RouteName =
  "professional/feedback-received" as const;
