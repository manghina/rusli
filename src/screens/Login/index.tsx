import React from "react";
import { View, Text } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { useLoginScreen } from "./index.hooks";
import { FormTextField } from "@app/components/_form/FormTextField";
import { styles } from "./styles";
import { AppButton } from "@app/components/_ui/AppButton";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  const {
    formData,
    submitDisabled,
    triggerSubmit,
    onForgotPasswordButtonPressed,
    allFieldsFilled,
    showLoadingAnimation,
    completionPercentage,
  } = useLoginScreen();

  return (
    <ScreenView
      hasScroll={false}
      animatedProgressBar
      progressBarValue={completionPercentage}
    >
      <FormProvider {...formData}>
        <View style={styles.container}>
          <FormTextField
            clearTextOnFocus={false}
            textContentType="emailAddress"
            keyboardType="email-address"
            name="email"
            label="Indirizzo email"
            autoComplete="email"
          />
          <FormTextField
            textContentType="password"
            autoComplete="password"
            name="password"
            label="Password"
            type="password"
          />

          <View style={styles.mainActionContainer}>
            <Text
              style={[
                styles.mainActionLabel,
                !allFieldsFilled ? styles.textDisabled : undefined,
              ]}
            >
              Ci sei quasi...
            </Text>
            <AppButton
              onPress={triggerSubmit}
              disabled={showLoadingAnimation ?? submitDisabled}
              label="Accedi"
            />
          </View>
          <View style={styles.secondaryActionContainer}>
            <Text style={styles.secondaryActionText}>
              Password dimenticata?
            </Text>
            <AppButton
              variant="link"
              color="info"
              size="small"
              label="Clicca qui"
              onPress={onForgotPasswordButtonPressed}
            />
          </View>
        </View>
      </FormProvider>
    </ScreenView>
  );
};

LoginScreen.displayName = "LoginScreen";
LoginScreen.RouteName = "login" as const;
