import React from "react";
import { View, Text } from "react-native-ui-lib";
import { useUserRegisterScreen } from "./index.hooks";

import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { styles } from "./styles";
import { colorTokens } from "@app/theme/colors/tokens";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { AppButton } from "@app/components/_ui/AppButton";

type UserRegisterScreenProps = {};

export const UserRegisterScreen = ({}: UserRegisterScreenProps) => {
  const {
    formData,
    stepperCounter,
    firstStepFilled,
    firstStepCompletionPercentage,
    secondStepFilled,
    secondStepCompletionPercentage,
    canGoToNextStep,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    submitDisabled,
    triggerSubmit,
    showLoadingAnimation,
    completionPercentage,
  } = useUserRegisterScreen();

  return (
    <ScreenView
      hasScroll={false}
      animatedProgressBar
      progressBarValue={completionPercentage}
    >
      <FormProvider {...formData}>
        {stepperCounter == 1 ? (
          <View key="step1">
            <View style={styles.formColumn}>
              <FormTextField name="firstName" label="Nome" />
              <FormTextField name="lastName" label="Cognome" />
              <FormDatePicker name="birthDate" label="Data di nascita" />
              <View style={styles.mainActionLabelContainer}>
                <Text
                  color={
                    !firstStepFilled
                      ? colorTokens.colorTextAccentGray
                      : colorTokens.colorTextDefault
                  }
                  style={styles.mainActionLabelText}
                >
                  Ci sei quasi...
                </Text>
              </View>
              <AppButton
                label="Prosegui"
                onPress={onNextStepButtonPressed}
                disabled={!canGoToNextStep}
              />
            </View>
          </View>
        ) : (
          <View key="step2">
            <View style={styles.formColumn}>
              <FormTextField
                textContentType="emailAddress"
                keyboardType={"email-address"}
                name="email"
                label="Email"
                autoComplete="email"
              />
              <FormTextField
                textContentType="password"
                autoComplete="password"
                name="password"
                label="Password"
                type="password"
              />
              <FormTextField
                textContentType="password"
                autoComplete="password"
                name="confirmPassword"
                label="Conferma password"
                type="password"
              />
              <Text
                color={
                  !secondStepFilled
                    ? colorTokens.colorTextAccentGray
                    : colorTokens.colorTextDefault
                }
                style={styles.mainActionLabelText}
              >
                Iscrizione completata!
              </Text>
              <AppButton
                onPress={triggerSubmit}
                disabled={
                  !secondStepFilled || submitDisabled || showLoadingAnimation
                }
                loading={showLoadingAnimation}
                label="Registrati"
              />
              <AppButton
                variant="link"
                color="secondary"
                label="Torna indietro"
                size="small"
                underline
                onPress={onPreviousStepButtonPressed}
              />
            </View>
          </View>
        )}
      </FormProvider>
    </ScreenView>
  );
};

UserRegisterScreen.displayName = "UserRegisterScreen";
UserRegisterScreen.RouteName = "user-register" as const;
