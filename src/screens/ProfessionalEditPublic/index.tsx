import React from "react";
import { useProfessionalEditPublicScreen } from "./index.hooks";
import { styles } from "./styles";
import { Text, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { FormTextArea } from "@app/components/_form/FormTextArea";
import { FormGooglePlacesTextField } from "@app/components/_form/FormGooglePlacesTextField";
import { AppButton } from "@app/components/_ui/AppButton";

export const ProfessionalEditPublicScreen = () => {
  const {
    formData,
    triggerProfileEditSubmit,
    submitDisabled,
    isPatchingProfessional,
    professionsOptions,
    officeLocationsFields,
    onAddOfficePressed,
    onRemoveOfficeCallbacks,
  } = useProfessionalEditPublicScreen();

  const renderPageContent = () => (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Profilo professionale</Text>
        <Text style={styles.subTitle}>
          Più informazioni aggiungerà, meglio Sweep riuscirà ad identificare i
          pazienti giusti per Lei!
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formColumn}>
          <FormTextArea
            label="Bio/Riassunto"
            name="bio"
            placeholder="Bio, formazione, titoli di laurea, eventuali corsi formativi, master, conseguimenti accademici, riconoscimenti, percorso formativo e lavorativo, ruoli ricoperti..."
          />
          <FormNewScreenFilterableSelect
            name="specialization"
            label="Specializzazione"
            options={professionsOptions}
            multipleSelection
            showSubOptions
            pageProps={{
              pageTitle: "Seleziona tipologia",
              pageDescription: "Indichi la sua specializzazione",
              searchTextLabel: "Trova specializzazione",
              listTitle: "Lista professioni",
            }}
          />
          <FormTextArea
            label="Descrizione specializzazioni"
            name="skillsetDescription"
            placeholder="Indichi gli ambiti e i trattamenti nei quale è particolarmente specializzato e abile."
          />
          <FormTextField
            name="website"
            label="Link a pagina web"
            placeholder="Inserisci il link al tuo sito web"
          />
          <FormTextField
            name="document"
            label="Documento/Allegato"
            placeholder="Carica un documento o un allegato"
          />
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>Ulteriore documentazione</Text>
            <AppButton
              disabled
              color="secondary"
              label="Aggiungi link o file"
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.formColumn}>
          <View style={styles.secondPartHeadingContainer}>
            <Text style={styles.secondPartHeading}>Luogo di lavoro</Text>
            <Text style={styles.secondPartSubtitle}>
              Lorem ipsum dolor sit amet consectetur. Urna urna sed dui mattis
              ac ornare adipiscing
            </Text>
          </View>
          {officeLocationsFields.map((officeLocation, index) => (
            <View
              key={officeLocation.id}
              style={styles.secondPartLocationContainer}
            >
              <View style={styles.secondPartLocationHeadingContainer}>
                <Text style={styles.secondPartLocationHeading}>
                  Sede di lavoro [{(index + 1).toString().padStart(2, "0")}]
                </Text>
                {index > 0 && (
                  <AppButton
                    underline
                    variant="text"
                    size="small"
                    color="error"
                    label="Rimuovi"
                    onPress={onRemoveOfficeCallbacks[index]}
                  />
                )}
              </View>
              <FormGooglePlacesTextField
                key={`${officeLocation.id}-address`}
                placeholder="Inserisci l'indirizzo"
                name={`officeLocations.${index}.address`}
              />
              <FormTextField
                key={`${officeLocation.id}-phone`}
                name={`officeLocations.${index}.phone`}
                placeholder="Inserisci il numero di telefono"
              />
            </View>
          ))}
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>Altro studio/ufficio?</Text>
            <AppButton onPress={onAddOfficePressed} label="Aggiungi sede" />
          </View>
        </View>
        <View style={styles.divider} />
        <AppButton
          label="Salva informazioni"
          disabled={submitDisabled}
          loading={isPatchingProfessional}
          onPress={triggerProfileEditSubmit}
        />
      </View>
    </View>
  );

  return (
    <ScreenView hasKeyboard>
      <FormProvider {...formData}>{renderPageContent()}</FormProvider>
    </ScreenView>
  );
};

ProfessionalEditPublicScreen.displayName = "ProfessionalEditPublicScreen";
ProfessionalEditPublicScreen.RouteName = "profile-edit-public" as const;
