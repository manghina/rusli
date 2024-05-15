import { ReactElement, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ConfigureIcon,
  CredentialsIcon,
  DocumentsIcon,
  PaymentsIcon,
} from "@app/components/SvgIcons";
import { ProfileCredentialsScreen } from "../ProfileCredentials";

type MenuItem = {
  label: string;
  icon: ReactElement;
  onPress: () => void;
};

type SettingsMenu = {
  category: string;
  items: MenuItem[];
}[];

export const useSettingsProfileScreen = () => {
  const navigation = useNavigation<any>();

  const profileMenuItems: SettingsMenu = useMemo(
    () => [
      {
        category: "Configura",
        items: [
          {
            label: "Credenziali di accesso",
            icon: <CredentialsIcon />,
            onPress: () => navigation.navigate(ProfileCredentialsScreen.RouteName),
          },
          {
            label: "Configura",
            icon: <ConfigureIcon />,
            onPress: () => console.log("Configure"),
          },
          {
            label: "Metodi di pagamento",
            icon: <PaymentsIcon />,
            onPress: () => console.log("Payment methods"),
          },
          {
            label: "Documenti",
            icon: <DocumentsIcon />,
            onPress: () => console.log("Documents"),
          },
        ],
      },
    ],
    [navigation],
  );

  return { profileMenuItems };
};
