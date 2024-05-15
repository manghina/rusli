import { View, Text, Image, Modal } from "react-native-ui-lib";
import WebView from "react-native-webview";
import homeBgImage from "@assets/img/doc1.png";
import { styles } from "./style";
import { useRegisterBottomSheet } from "./index.hooks";
import React from "react";
import { BottomSheet } from "@app/components/BottomSheet";
import { AppButton } from "@app/components/_ui/AppButton";
import { textVariants } from "@app/theme/typographies/variants";

export const RegisterBottomSheet = ({
  onLoginButtonPressed,
  showRegisterBottomSheet,
  onRegisterClose,
}: {
  onLoginButtonPressed: () => void;
  showRegisterBottomSheet: boolean;
  onRegisterClose: () => void;
}) => {
  const {
    visibleWebView,
    onUserRegisterButtonPressed,
    onProfessionalRegisterButtonPressed,
    onTermsAndConditionsButtonPressed,
    onPrivacyPolicyButtonPressed,
    onWebViewClose,
  } = useRegisterBottomSheet();

  return (
    <BottomSheet visible={showRegisterBottomSheet} onDismiss={onRegisterClose}>
      <View style={styles.pageContent}>
        <View style={styles.background} />
        <View>
          <Text style={styles.title}>Registrati</Text>
          <View row>
            <Text style={styles.subtitle}>Benvenuto in </Text>
            <Text style={styles.appName}>Sweep</Text>
          </View>
        </View>
        <Image source={homeBgImage} style={styles.backgroundImage} />
        <View style={styles.mainActionsContainer}>
          <AppButton
            label="Crea profilo paziente"
            onPress={onUserRegisterButtonPressed}
          />
          <Text style={styles.separationText}>in alternativa</Text>
          <AppButton
            color="secondary"
            label="Iscriviti come medico"
            onPress={onProfessionalRegisterButtonPressed}
          />
        </View>
        {/*
        <AppButton
          GrayButton
          iconSource={GoogleSVG}
          iconStyle={{}}
          label="Continua con Google"
          marginT-16
          paddingH-32
          style={{ width: "100%", height: 52 }}
          onPress={() => {}}
        />
        <AppButton
          GrayButton
          iconSource={AppleSVG}
          iconStyle={{}}
          label="Continua con Apple"
          marginT-16
          paddingH-32
          style={{ width: "100%", height: 52 }}
          onPress={() => {}}
        />
           */}
        <View style={styles.secondaryActionContainer}>
          <Text style={styles.secondaryActionText}>Hai già un profilo?</Text>
          <AppButton
            color="info"
            variant="link"
            label="Accedi"
            size="small"
            onPress={onLoginButtonPressed}
          />
        </View>
        <View style={styles.userAgreements}>
          <Text style={styles.infoText}>Continuando si accettano </Text>
          <AppButton
            color="info"
            variant="link"
            label="T&C"
            size="small"
            labelStyle={styles.infoLink}
            onPress={onTermsAndConditionsButtonPressed}
          />
          <Text style={styles.infoText}> e </Text>
          <AppButton
            color="info"
            variant="link"
            label="Privacy Policy"
            size="small"
            labelStyle={styles.infoLink}
            onPress={onPrivacyPolicyButtonPressed}
          />
          <Text style={styles.infoText}> di Sweep AI.</Text>
        </View>
        <Modal
          visible={visibleWebView}
          presentationStyle="pageSheet"
          animationType="slide"
          onRequestClose={onWebViewClose}
        >
          <WebView source={{ uri: "www.sweepit.ai" }}></WebView>
        </Modal>
      </View>
    </BottomSheet>
  );
};
