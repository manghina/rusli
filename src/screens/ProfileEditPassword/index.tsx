import { useProfileEditPasswordScreen } from "./index.hooks";
import { styles } from "./styles";
import { Text, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { AppButton } from "@app/components/_ui/AppButton";

export const ProfileEditPasswordScreen = () => {
  const { triggerEditPassword, formData, submitDisabled, isPatchingAccount } =
    useProfileEditPasswordScreen();
  return (
    <ScreenView hasKeyboard>
      <View style={styles.pageContainer}>
        <View>
          <Text style={styles.title}>Modifica password</Text>
          <Text style={styles.subtitle}>Ottima idea!</Text>
        </View>
        <FormProvider {...formData}>
          <View style={styles.formContainter}>
            <FormTextField
              type="password"
              label="Vecchia password"
              name="password"
            />
            <FormTextField
              type="password"
              label="Nuova password"
              name="newPassword"
            />
            <FormTextField
              type="password"
              label="Conferma password"
              name="confirmNewPassword"
            />
            <View style={styles.actionContainer}>
              <Text style={styles.saveConfirmationText}>
                Vuoi salvare le modifiche?
              </Text>
              <AppButton
                loading={isPatchingAccount}
                disabled={submitDisabled}
                label="Salva"
                onPress={triggerEditPassword}
              />
            </View>
          </View>
        </FormProvider>
      </View>
    </ScreenView>
  );
};

ProfileEditPasswordScreen.displayName = "ProfileEditPasswordScreen";
ProfileEditPasswordScreen.RouteName = "profile-edit-password" as const;
