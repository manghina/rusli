import { Button, Text, View } from "react-native-ui-lib";
import { styles } from "./styles";
import { useContactUsScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextArea } from "@app/components/_form/FormTextArea";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { AppButton } from "@app/components/_ui/AppButton";

export const ContactUsScreen = () => {
  const { formData, canSubmit, triggerSendContactUsMessage } =
    useContactUsScreen();
  return (
    <FormProvider {...formData}>
      <ScreenView hasKeyboard>
        <View style={styles.containter}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingTitle}>Contattaci</Text>
            <Text style={styles.headingSubtitle}>Come possiamo aiutarti?</Text>
          </View>
          <View style={styles.contentContainer}>
            <FormTextArea name="message" />
            <View style={styles.ctaContainer}>
              <Text style={styles.ctaText}>bla bla bla bla bla?</Text>
              <AppButton
                label="Invia messaggio"
                disabled={!canSubmit}
                onPress={triggerSendContactUsMessage}
              />
            </View>
          </View>
        </View>
      </ScreenView>
    </FormProvider>
  );
};

ContactUsScreen.displayName = "ContactUsScreen";
ContactUsScreen.RouteName = "contact-us" as const;
