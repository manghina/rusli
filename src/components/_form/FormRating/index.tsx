import { View, TouchableOpacity } from "react-native-ui-lib";
import { styles } from "./styles";
import { useFormRating } from "./index.hooks";
import { colorTokens } from "@app/theme/colors/tokens";

type FormRatingProps = { name: string };

export const FormRating = ({ name }: FormRatingProps) => {
  const { value, setValue, iconsObject, onRatingClickedCallbacks } =
    useFormRating(name);

  return (
    <View style={styles.container}>
      {
        // Loop through the icons object and render the icons
        Object.entries(iconsObject).map(([key, Icon], index) => {
          const isSelected = value === +key;

          return (
            <TouchableOpacity
              key={key}
              onPress={onRatingClickedCallbacks[index]}
            >
              <View
                style={[
                  styles.optionContainer,
                  isSelected && styles.optionContainerSelected,
                ]}
              >
                <Icon
                  selected={isSelected}
                  color={isSelected ? colorTokens.colorIconInverse : undefined}
                />
              </View>
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};
