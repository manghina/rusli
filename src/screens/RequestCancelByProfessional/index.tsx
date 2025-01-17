import React from "react";
import { useRequestCancelByProfessional } from "./index.hooks";
import { Text, View, RadioGroup } from "react-native-ui-lib";
import { ScrollView, TextInput } from "react-native";
import { styles } from "./styles";
import { AppRadioButton } from "@app/components/AppRadioButton";
import { AppButton } from "@app/components/_ui/AppButton";
type RequestCancelByProfessionalScreenProps = {};

export const RequestCancelByProfessionalScreen =
  ({}: RequestCancelByProfessionalScreenProps) => {
    const {
      handleDeleteRequest,
      goBack,
      radioValues,
      textValue,
      setTextValue,
      handleRadioChange,
    } = useRequestCancelByProfessional();

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Cancellazione</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
          <View>
            <Text style={styles.paragraphTitle}>Motivazioni</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Urna urna sed dui mattis
              ac ornare adipiscing
            </Text>

            <RadioGroup onValueChange={handleRadioChange}>
              <AppRadioButton
                selected={radioValues.option1}
                handlePress={() => {
                  handleRadioChange("option1");
                }}
                label="Option A"
                style={styles.firstRadioBtn}
              />
              <AppRadioButton
                selected={radioValues.option2}
                handlePress={() => handleRadioChange("option2")}
                label="Option C"
                style={styles.lastRadioBtn}
              />
            </RadioGroup>
          </View>

          <View>
            <Text style={styles.paragraphTitle}>Title</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. Urna urna sed dui mattis
              ac ornare adipiscing
            </Text>
            <TextInput
              style={[
                styles.textArea,
                textValue ? styles.textAreaDirty : styles.textAreaEmpty,
              ]}
              placeholder={"Scrivi qui..."}
              multiline
              value={textValue}
              onChange={(ev) => {
                setTextValue(ev.nativeEvent.text);
              }}
            />
          </View>

          <View>
            <Text style={styles.paragraphTitle}>Disclaimer</Text>
            <Text style={styles.paragraph}>
              Tortor nunc tristique pretium cursus imperdiet eros tristique
              sagittis faucibus. Elit tincidunt nec adipiscing magnis neque
              turpis. Risus nulla nec purus at convallis diam. Vitae nulla
              aliquam vestibulum condimentum. Mauris dictum tincidunt placerat
              libero purus sed quis turpis viverra.
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Sicuro di voler procedere?</Text>
            <AppButton
              color="error"
              onPress={handleDeleteRequest}
              label="Annulla prenotazione"
            />
            <AppButton
              variant="text"
              size="small"
              color="secondary"
              label="Torna indietro"
              onPress={goBack}
            />
          </View>
        </View>
      </ScrollView>
    );
  };

RequestCancelByProfessionalScreen.displayName =
  "RequestCancelByProfessionalScreen";
RequestCancelByProfessionalScreen.RouteName = "requests/cancel" as const;
