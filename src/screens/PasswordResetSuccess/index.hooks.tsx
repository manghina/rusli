import { useNavigation, useRoute } from "@react-navigation/native";
import { LoginScreen } from "@app/screens/Login";
import { useCallback, useMemo } from "react";
import { TutorialScreen } from "../Tutorial";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { UserHomeScreen } from "../UserHome";
import { ProfessionalHomeScreen } from "../ProfessionalHome";

interface PasswordResetSuccessScreenRouteParams {
  shouldGoToHomeScreen?: boolean;
}

export const usePasswordResetSuccessScreen = () => {
  const navigation = useNavigation<any>();
  const account = useSelector(selectors.getAccount);
  const route = useRoute();

  const { shouldGoToHomeScreen } =
    useMemo<PasswordResetSuccessScreenRouteParams>(
      () =>
        (route.params as PasswordResetSuccessScreenRouteParams) ?? {
          shouldGoToHomeScreen: false,
        },
      [route.params],
    );

  const goToLoginScreen = useCallback(
    () =>
      navigation.reset({
        index: 0,
        routes: [
          { name: TutorialScreen.RouteName },
          { name: LoginScreen.RouteName },
        ],
      }),
    [navigation],
  );

  const goToHomeScreen = useCallback(() => {
    if (account?.type === "user") {
      navigation.reset({
        index: 0,
        routes: [{ name: UserHomeScreen.RouteName }],
      });
    }
    if (account?.type === "professional") {
      navigation.reset({
        index: 0,
        routes: [{ name: ProfessionalHomeScreen.RouteName }],
      });
    }
  }, [account]);

  const handleButtonPress = useCallback(() => {
    if (shouldGoToHomeScreen) {
      goToHomeScreen();
    } else {
      goToLoginScreen();
    }
  }, [shouldGoToHomeScreen, goToHomeScreen, goToLoginScreen]);

  return { navigation, handleButtonPress, shouldGoToHomeScreen };
};
