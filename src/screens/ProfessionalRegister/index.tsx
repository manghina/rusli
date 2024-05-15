import React from "react";
import { View, Text } from "react-native-ui-lib";
import { useProfessionalRegister } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormGooglePlacesTextField } from "@app/components/_form/FormGooglePlacesTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormImagePicker } from "@app/components/_form/FormImagePicker";
import { styles } from "./styles";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import { colorTokens } from "@app/theme/colors/tokens";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import { AppButton } from "@app/components/_ui/AppButton";

export const ProfessionalRegisterScreen = () => {
  const {
    formData,
    submitDisabled,
    phonePrefixOptions,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
    startImageUpload,
    officeLocationsFields,
    removeOfficeCallbacks,
    onAddOfficePressed,
  } = useProfessionalRegister();

  const renderStep1 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField key="name" name="name" label="Nome" />
      <FormTextField key="lastName" name="lastName" label="Cognome" />
      <FormDatePicker
        key="birthDate"
        name="birthDate"
        label="Data di nascita"
      />
      <View>
        <Text style={styles.phoneNumberLabel}>Numero di cellulare</Text>
        <View row style={styles.phoneInputContainer}>
          <View style={styles.phonePrefixContainer}>
            <FormNewScreenFilterableSelect
              key="phonePrefix"
              name="phonePrefix"
              options={phonePrefixOptions}
              pageProps={{
                pageTitle: "Seleziona prefisso",
                pageDescription:
                  "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                searchTextLabel: "Trova nazione",
                listTitle: "Lista nazioni",
              }}
              style={styles.phonePrefix}
              disabled={true}
              reducedLabel
            />
          </View>
          <View style={styles.phoneNumberContainer}>
            <FormTextField
              key="phoneNumber"
              name="phoneNumber"
              keyboardType="phone-pad"
              style={styles.phoneNumber}
            />
          </View>
        </View>
      </View>
    </View>
  );
  const renderStep2 = () => (
    <View style={styles.fieldsColumn}>
      <FormImagePicker
        key="professionalPaperPhoto"
        name="professionalPaperPhoto"
        label="Carica foto libretto"
        onImagePickedCallback={startImageUpload}
      />
      <FormTextField
        key="professionalRegistrationNumber"
        name="professionalRegistrationNumber"
        label="Numero iscrizione albo"
      />
      <FormNewScreenFilterableSelect
        key="province"
        name="province"
        label="Ordine dei medici della provincia di"
        options={provincesOptions}
        pageProps={{
          pageTitle: "Seleziona sede",
          pageDescription:
            "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
          searchTextLabel: "Trova provincia",
          listTitle: "Lista città",
        }}
      />
      <FormNewScreenFilterableSelect
        key="specialization"
        name="specialization"
        label="Specializzazione"
        options={professionsOptions}
        multipleSelection
        showSubOptions
        pageProps={{
          pageTitle: "Seleziona tipologia",
          pageDescription:
            "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
          searchTextLabel: "Trova specializzazione",
          listTitle: "Lista professioni",
        }}
      />
      {officeLocationsFields.map((officeLocation, index) => (
        <View key={officeLocation.id} style={styles.locationContainer}>
          <View style={styles.locationHeadingContainer}>
            <Text style={styles.locationHeading}>
              Sede di lavoro [{(index + 1).toString().padStart(2, "0")}]
            </Text>
            {index > 0 && (
              <AppButton
                variant="text"
                color="error"
                size="small"
                label="Rimuovi"
                underline
                onPress={removeOfficeCallbacks[index]}
              />
            )}
          </View>
          <FormGooglePlacesTextField
            key={officeLocation.id}
            name={`officeLocations[${index}].address`}
            placeholder="Indirizzo completo"
          />
          <FormTextField
            name={`officeLocations[${index}].phone`}
            placeholder="Numero di telefono"
          />
        </View>
      ))}
      <View style={styles.addLocationContainer}>
        <Text style={styles.addLocationQuestion}>Operi in più sedi?</Text>
        <AppButton
          variant="link"
          size="small"
          label="Aggiungi studio"
          onPress={onAddOfficePressed}
        />
      </View>
    </View>
  );
  const renderStep3 = () => (
    <View style={styles.fieldsColumn}>
      <FormTextField
        key="email"
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        name="email"
        label="Indirizzo email"
      />
      <FormTextField
        key="password"
        name="password"
        type="password"
        autoComplete="password"
        label="Password"
        textContentType="password"
      />
      <FormTextField
        key="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="password"
        label="Conferma password"
        textContentType="password"
      />
    </View>
  );

  const renderStepControls = () => {
    const isFirstStep = stepperIndex === 1;
    const isLastStep = stepperIndex === 3;

    return (
      <View style={styles.stepperControlsContainer}>
        <View style={styles.stepperControlMainActionContainer}>
          <Text
            center
            color={
              !currentStepFilled
                ? colorTokens.colorTextAccentGray
                : colorTokens.colorTextDefault
            }
          >
            Ci sei quasi...
          </Text>
          <AppButton
            disabled={isLastStep ? submitDisabled : !canGoToNextStep && false}
            onPress={
              isLastStep
                ? triggerProfessionalRegisterSubmit
                : onNextStepButtonPressed
            }
            label={isLastStep ? "Registrati" : "Prosegui"}
          />
        </View>
        {!isFirstStep && (
          <AppButton
            variant="text"
            label="Torna indietro"
            color="secondary"
            size="small"
            underline
            onPress={onPreviousStepButtonPressed}
          />
        )}
      </View>
    );
  };

  return (
    <FormProvider {...formData}>
      <ScreenView
        hasKeyboard
        animatedProgressBar
        progressBarValue={currentStepCompletionPercentage}
      >
        <View style={styles.stepContent}>
          {stepperIndex === 1 ? (
            renderStep1()
          ) : stepperIndex === 2 ? (
            renderStep2()
          ) : stepperIndex === 3 ? (
            renderStep3()
          ) : (
            <View />
          )}
          {renderStepControls()}
        </View>
      </ScreenView>
    </FormProvider>
  );
};

ProfessionalRegisterScreen.displayName = "ProfessionalRegisterScreen";
ProfessionalRegisterScreen.RouteName = "professional-register" as const;
