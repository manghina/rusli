import { View, Text, Image, Modal } from "react-native-ui-lib";
import WebView from "react-native-webview";
import homeBgImage from "@assets/img/doc1.png";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { useHomeScreen } from "./index.hooks";
import React from "react";
import { AppButton } from "@app/components/_ui/AppButton";
import { textVariants } from "@app/theme/typographies/variants";

export const HomeScreen = () => {
  const {
    visibleWebView,
    onUserRegisterButtonPressed,
    onProfessionalRegisterButtonPressed,
    onLoginButtonPressed,
    onTermsAndConditionsButtonPressed,
    onPrivacyPolicyButtonPressed,
    onWebViewClose,
  } = useHomeScreen();

  return (
    <SafeAreaView style={styles.pageContainer}>
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
            onPress={onUserRegisterButtonPressed}
            label="Crea profilo paziente"
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
            variant="link"
            size="small"
            onPress={onLoginButtonPressed}
            label="Accedi"
          />
        </View>
        <View style={styles.userAgreements}>
          <Text style={styles.infoText}>Continuando si accettano </Text>
          <AppButton
            variant="link"
            size="small"
            label="T&C"
            labelStyle={styles.infoLink}
            onPress={onTermsAndConditionsButtonPressed}
          />
          <Text style={styles.infoText}> e </Text>
          <AppButton
            variant="link"
            size="small"
            label="Privacy Policy"
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
    </SafeAreaView>
  );
};

HomeScreen.displayName = "HomeScreen";
HomeScreen.RouteName = "home" as const;
