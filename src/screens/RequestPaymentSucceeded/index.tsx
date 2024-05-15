import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { useRequestPaymentSucceededScreen } from "./index.hooks";
import LottieView from "lottie-react-native";
import { styles } from "./style";
import { Pressable } from "react-native";
import { AppButton } from "@app/components/_ui/AppButton";
import { colorTokens } from "@app/theme/colors/tokens";

type RequestPaymentSucceededScreenProps = {};

export const RequestPaymentSucceededScreen =
  ({}: RequestPaymentSucceededScreenProps) => {
    const { onCloseButtonPressed, handleSaveRequestInICal } =
      useRequestPaymentSucceededScreen();

    return (
      <View style={styles.page}>
        <View>
          <LottieView
            source={require("../../../assets/animations/success.json")}
            autoPlay
            speed={1}
            loop={false}
            style={styles.animation}
          />
          <View style={styles.mainContent}>
            <View style={styles.pageContent}>
              <Text center Title style={styles.title}>
                Evviva!
              </Text>
              <Text style={styles.text}>
                La prenotazione è stata confermata e Sweep ti manderà tutti i
                dettagli via mail.
              </Text>
              <Text style={styles.text}>Il medico ti aspetta</Text>
            </View>
            <View style={styles.actionsContainer}>
              <AppButton label="Chiudi" onPress={onCloseButtonPressed} />
              <AppButton
                underline
                variant="text"
                onPress={handleSaveRequestInICal}
                label="Salva appuntamento in iCal"
                labelStyle={{ color: colorTokens.colorTextAlternativeSubtlest }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

RequestPaymentSucceededScreen.displayName = "RequestPaymentSucceededScreen";
RequestPaymentSucceededScreen.RouteName = "requests/payment-succeeded" as const;
