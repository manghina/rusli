import { useProfileCredentialsScreen } from "./index.hooks";
import { styles } from "./styles";
import { Button, Text, View } from "react-native-ui-lib";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";
import { EditIcon } from "@app/components/SvgIcons";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

export const ProfileCredentialsScreen = () => {
  const { handleEditPassword, email } = useProfileCredentialsScreen();
  return (
    <ScreenView hasScroll={false}>
      <View style={styles.pageContainer}>
        <Text style={styles.title}>Credenziali d'accesso</Text>
        <View style={styles.formContainter}>
          <BaseTextField
            label="Indirizzo email"
            value={email}
            editable={false}
          />
          <BaseTextField
            label="Password"
            value="0000000000000000"
            secureTextEntry
            editable={false}
            trailingAccessory={
              <Button
                round
                onPress={handleEditPassword}
                style={[styles.editButton]}
              >
                <EditIcon />
              </Button>
            }
          />
        </View>
      </View>
    </ScreenView>
  );
};

ProfileCredentialsScreen.displayName = "ProfileCredentialsScreen";
ProfileCredentialsScreen.RouteName = "profile-credentials" as const;
