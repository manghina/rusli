import { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { useCheckoutButton } from "./index.hooks";
import { styles } from "./styles";
import { AppButton } from "@app/components/_ui/AppButton";

type CheckoutButtonProps = {
  professionalOfferId: string;
  slotId: string;
};

export const CheckoutButton = memo(
  ({ professionalOfferId, slotId }: CheckoutButtonProps) => {
    const { isReady, isLoading, onPress } = useCheckoutButton(
      professionalOfferId,
      slotId,
    );

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Finalizza iter di prenotazione</Text>
        <AppButton
          onPress={onPress}
          disabled={!isReady || isLoading}
          loading={isLoading}
          label="Procedi al pagamento"
        />
      </View>
    );
  },
);

CheckoutButton.displayName = "CheckoutButton";
