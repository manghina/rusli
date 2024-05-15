import { useNavigation } from "@react-navigation/native";
import { LoginScreen } from "@app/screens/Login";
import { useCallback } from "react";
import { TutorialScreen } from "../Tutorial";
import { ProfessionalHomeScreen } from "@app/screens/ProfessionalHome";

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();

  const onContinueButtonPressed = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [{ name: ProfessionalHomeScreen.RouteName }],
      }),
    [navigation],
  );

  return { navigation, onContinueButtonPressed };
};
