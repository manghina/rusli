import React from "react";
import { useRequestSearchProfessionalsScreen } from "./index.hooks";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { ProfessionalSearchCarousel } from "@app/components/_users/ProfessionalResearchCarousel";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { AppButton } from "@app/components/_ui/AppButton";

type RequestSearchProfessionalsScreenProps = {};

export const RequestSearchProfessionalsScreen =
  ({}: RequestSearchProfessionalsScreenProps) => {
    const { onBackButtonPress, pageDescription } =
      useRequestSearchProfessionalsScreen();

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.contentWrapper}>
            <Text style={styles.pageTitle}>Prenotazione</Text>
            <Text style={styles.pageDescription}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
          <ProfessionalSearchCarousel />
          <View style={[styles.contentWrapper, styles.descriptionContainer]}>
            <Text style={styles.sectionTitle}>Ricerca in corso</Text>
            <Text style={styles.sectionSubtitle}>{pageDescription}</Text>
          </View>
          <View style={[styles.contentWrapper, styles.actionsContainer]}>
            <AppButton
              underline
              variant="text"
              size="small"
              color="secondary"
              label="Torna indietro"
              onPress={onBackButtonPress}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

RequestSearchProfessionalsScreen.displayName =
  "RequestSearchProfessionalsScreen";
RequestSearchProfessionalsScreen.RouteName =
  "requests/search-professionals" as const;
