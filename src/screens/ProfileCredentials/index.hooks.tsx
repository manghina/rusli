import { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux-store";
import { ProfileEditPasswordScreen } from "../ProfileEditPassword";

export const useProfileCredentialsScreen = () => {
  const navigation = useNavigation<any>();
  const me = useSelector(selectors.getMe);

  const email = useMemo(() => me?.email, [me]);

  const handleEditPassword = useCallback(() => {
    navigation.navigate(ProfileEditPasswordScreen.RouteName);
  }, [navigation]);

  return { handleEditPassword, email };
};
