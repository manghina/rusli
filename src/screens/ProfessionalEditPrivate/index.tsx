import React, { FC, PropsWithChildren } from "react";
import { useProfessionalEditPrivateScreen } from "./index.hooks";
import { styles } from "./styles";
import { Button, Text, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormRadioGroup } from "@app/components/_form/FormRadioGroup";
import { OtpVerificationNewScreen } from "@app/components/OtpVerificationNewScreen";
import { FormImagePicker } from "@app/components/_form/FormImagePicker";
import {
  countryOptions,
  genderOptions,
  phonePrefixOptions,
  provincesOptions,
} from "./constantData";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";
import App from "../../../App";
import { AppButton } from "@app/components/_ui/AppButton";

const otpComponentProps = {
  componentTitle: "Numero di contatto",
  componentDescription:
    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
};

export const ProfessionalEditPrivateScreen = () => {
  const {
    formData,
    countryOptions,
    phonePrefixOptions,
    genderOptions,
    submitDisabled,
    isPatchingProfessional,
    triggerProfileEditSubmit,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    handleGoBackFromOtpVerification,
    handleOtpVerification,
    handleResendOtpCode,
    startImageUpload,
  } = useProfessionalEditPrivateScreen();

  const OtpNewScreenWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
      <OtpVerificationNewScreen
        componentProps={otpComponentProps}
        handleGoBack={handleGoBackFromOtpVerification}
        handleVerification={handleOtpVerification}
        handleResendCode={handleResendOtpCode}
      >
        {children}
      </OtpVerificationNewScreen>
    );
  };

  const renderPageContent = () => (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Profilo personale</Text>
        <Text style={styles.subTitle}>
          Questi dati resteranno privati e non saranno condivisi con i pazienti
        </Text>
      </View>
      <View style={styles.formColumn}>
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
        <FormTextField name="name" label="Nome" />
        <FormTextField name="lastName" label="Cognome" />
        <FormDatePicker name="birthDate" label="Data di nascita" />
        <FormNewScreenFilterableSelect
          key="country"
          name="country"
          label="Nazione (cittadinanza)"
          options={countryOptions}
          pageProps={{
            pageTitle: "Nazionalità",
            searchTextLabel: "Cerca...",
            listTitle: "Lista nazioni",
          }}
        />
        <FormRadioGroup
          name="gender"
          listTitle="Sesso biologico"
          options={genderOptions}
        />
        <View>
          <View style={styles.phoneNumberLabelContainer}>
            <Text style={styles.phoneNumberLabel}>Numero di cellulare</Text>
            {/* {isToVerifyPhoneNumber && (
              <OtpNewScreenWrapper>
                <Text style={styles.phoneNumberVerifyText}>Verifica</Text>
              </OtpNewScreenWrapper>
            )} */}
          </View>
          <View style={styles.phoneInputContainer}>
            <View style={styles.phonePrefixContainer}>
              <FormNewScreenFilterableSelect
                key="phonePrefix"
                name="phonePrefix"
                label=""
                options={phonePrefixOptions}
                pageProps={{
                  pageTitle: "Seleziona prefisso",
                  pageDescription:
                    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                  searchTextLabel: "Trova nazione",
                  listTitle: "Lista nazioni",
                }}
                style={styles.phonePrefix}
                reducedLabel
              />
            </View>
            <View style={styles.phoneNumberContainer}>
              <FormTextField
                key="phoneNumber"
                name="phoneNumber"
                // trailingAccessory={
                //   isToVerifyPhoneNumber ? (
                //     <OtpNewScreenWrapper>
                //       <View style={styles.iconContainer}>
                //         <WarningFilledIcon color={styles.warningIcon.color} />
                //       </View>
                //     </OtpNewScreenWrapper>
                //   ) : isVerifiedPhoneNumber ? (
                //     <View style={styles.iconContainer}>
                //       <SuccessFilledIcon color={styles.successIcon.color} />
                //     </View>
                //   ) : (
                //     <></>
                //   )
                // }
                keyboardType="phone-pad"
                style={{
                  ...styles.phoneNumber,
                  // ...(isToVerifyPhoneNumber ? styles.phoneNumberToVerify : {}),
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
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

ProfessionalEditPrivateScreen.displayName = "ProfessionalEditPrivateScreen";
ProfessionalEditPrivateScreen.RouteName = "profile-edit-private" as const;
