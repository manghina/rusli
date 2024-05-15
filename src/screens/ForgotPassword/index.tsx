import React from "react";
import { View, Text } from "react-native-ui-lib";
import { useForgotPasswordScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { styles } from "./styles";
import { OtpVerification } from "@app/components/OtpVerification";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { AppButton } from "@app/components/_ui/AppButton";

export const ForgotPasswordScreen = () => {
  const {
    formData,
    triggerPasswordChangeSubmit,
    step1Filled,
    step2Filled,
    step3Filled,
    completionPercentage,
    stepperCounter,
    onFirstStepProceedButtonPressed,
    onBackButtonPressed,
    handleOtpVerification,
    handleResendOtpCode,
    isResettingPassword,
  } = useForgotPasswordScreen();

  const renderStep1 = () => (
    <View style={styles.stepContainer}>
      <View>
        <Text style={styles.pageTitle}>Password dimenticata?</Text>
        <Text style={styles.pageSubtitle}>Oh no!</Text>
      </View>
      <View key="step1" style={styles.formColumn}>
        <FormTextField
          keyboardType="email-address"
          name="email"
          autoComplete="email"
          label="Indirizzo email usato in fase di registrazione"
          textContentType="emailAddress"
        />
        <View style={styles.mainActionContainer}>
          <AppButton
            label="Prosegui"
            onPress={onFirstStepProceedButtonPressed}
            disabled={!step1Filled}
          />
        </View>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View key="step2">
      <OtpVerification
        componentProps={{
          componentTitle: "Password dimenticata?",
          componentDescription:
            "Abbiamo la soluzione e siamo qui per aiutarti a impostarne una tutta nuova.",
        }}
        handleVerification={handleOtpVerification}
        handleGoBack={onBackButtonPressed}
        handleResendCode={handleResendOtpCode}
      />
    </View>
  );

  const renderStep3 = () => (
    <View key="step3" style={styles.stepContainer}>
      <View>
        <Text style={styles.pageTitle}>Password dimenticata?</Text>
        <Text style={styles.pageSubtitle}>
          Abbiamo la soluzione e siamo qui per aiutarti a impostarne una tutta
          nuova.
        </Text>
      </View>
      <View key="step3" style={styles.formColumn}>
        <FormTextField
          name="newPassword"
          label="Crea nuova password"
          type="password"
        />
        <FormTextField
          name="confirmNewPassword"
          label="Comferma password"
          type="password"
          autoComplete="password"
          textContentType="password"
        />
        <View style={styles.mainActionContainer}>
          <Text
            style={[
              styles.mainActionLabel,
              styles.subtlest,
              !step3Filled ? styles.textDisabled : undefined,
            ]}
          >
            Un ultimo sforzo...
          </Text>
          <AppButton
            label="Conferma"
            onPress={triggerPasswordChangeSubmit}
            disabled={!step3Filled}
            loading={isResettingPassword}
          />
        </View>
        <AppButton
          variant="text"
          size="small"
          color="secondary"
          onPress={onBackButtonPressed}
          label="Torna indietro"
        />
      </View>
    </View>
  );

  return (
    <ScreenView
      animatedProgressBar
      progressBarValue={completionPercentage}
      hasScroll={false}
    >
      <FormProvider {...formData}>
        {stepperCounter === 1 && renderStep1()}
        {stepperCounter === 2 && renderStep2()}
        {stepperCounter === 3 && renderStep3()}
      </FormProvider>
    </ScreenView>
  );
};

ForgotPasswordScreen.displayName = "LoginByMailScreen";
ForgotPasswordScreen.RouteName = "forgot-password" as const;
