import { useRequestReviewByProfessional } from "./index.hooks";
import { Text, View } from "react-native-ui-lib";
import { SafeAreaView, ScrollView } from "react-native";
import { FormProvider } from "react-hook-form";
import { styles } from "./styles";
import { FormRating } from "@app/components/_form/FormRating";
import { FormTextArea } from "@app/components/_form/FormTextArea";
import { AppButton } from "@app/components/_ui/AppButton";

type RequestReviewByProfessionalScreenProps = {};

export const RequestReviewByProfessionalScreen =
  ({}: RequestReviewByProfessionalScreenProps) => {
    const { triggerSubmit, formData, submitDisabled, isPostingReview } =
      useRequestReviewByProfessional();

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <FormProvider {...formData}>
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>Recensione</Text>
                <Text style={styles.subtitle}>
                  Un altro paziente visitato con successo! Aiuti Sweep a
                  migliorare.
                </Text>
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputTextsContainer}>
                  <Text style={styles.inputTitle}>01</Text>
                  <Text style={styles.inputDescription}>
                    Dia un voto a Sweep
                  </Text>
                </View>
                <FormRating name="feedback.sweepRating" />
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputTextsContainer}>
                  <Text style={styles.inputTitle}>02</Text>
                  <Text style={styles.inputDescription}>
                    Cosa dell'intero processo di acquisizione del nuovo paziente
                    ha trovato positivo?
                  </Text>
                </View>
                <FormTextArea name="feedback.sweepPositives" />
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputTextsContainer}>
                  <Text style={styles.inputTitle}>03</Text>
                  <Text style={styles.inputDescription}>
                    Cosa non ha trovato di positivo?
                  </Text>
                </View>
                <FormTextArea name="feedback.sweepNegatives" />
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputTextsContainer}>
                  <Text style={styles.inputTitle}>04</Text>
                  <Text style={styles.inputDescription}>
                    Dia un voto al paziente!
                  </Text>
                </View>
                <FormRating name="feedback.userRating" />
              </View>

              <View style={styles.inputSection}>
                <View style={styles.inputTextsContainer}>
                  <Text style={styles.inputTitle}>05</Text>
                  <Text style={styles.inputDescription}>
                    Qualcosa da segnalare sul paziente o sulla visita in
                    generale?
                  </Text>
                </View>
                <FormTextArea name="feedback.userComments" />
              </View>

              <View>
                <Text style={styles.inputTitle}>Disclaimer</Text>
                <Text style={styles.inputDescription}>
                  Tortor nunc tristique pretium cursus imperdiet eros tristique
                  sagittis faucibus. Elit tincidunt nec adipiscing magnis neque
                  turpis. Risus nulla nec purus at convallis diam. Vitae nulla
                  aliquam vestibulum condimentum. Mauris dictum tincidunt
                  placerat libero purus sed quis turpis viverra.
                </Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerText}>bla bla bla bla bla?</Text>
                <AppButton
                  onPress={triggerSubmit}
                  label="Invia"
                  disabled={submitDisabled}
                  loading={isPostingReview}
                />
              </View>
            </View>
          </FormProvider>
        </ScrollView>
      </SafeAreaView>
    );
  };

RequestReviewByProfessionalScreen.displayName =
  "RequestReviewByProfessionalScreen";
RequestReviewByProfessionalScreen.RouteName =
  "professionals/request/review" as const;
