import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "../styles";
import { colorTokens } from "../../../../../theme/colors/tokens";

type HappyIconProps = {
  color?: string;
  selected?: boolean;
};

const HappyIcon = ({ color, selected = false, ...props }: HappyIconProps) => (
  <View style={[styles.container, selected && styles.selectedContainer]}>
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M16.9869 2H8.60687C4.96687 2 2.79688 4.17 2.79688 7.81V16.18C2.79688 19.83 4.96687 22 8.60687 22H16.9769C20.6169 22 22.7869 19.83 22.7869 16.19V7.81C22.7969 4.17 20.6269 2 16.9869 2ZM9.29688 6.38C10.3269 6.38 11.1769 7.22 11.1769 8.26C11.1769 9.3 10.3369 10.14 9.29688 10.14C8.25688 10.14 7.41687 9.28 7.41687 8.25C7.41687 7.22 8.26688 6.38 9.29688 6.38ZM12.7969 19.08C10.1069 19.08 7.91687 16.89 7.91687 14.2C7.91687 13.5 8.48688 12.92 9.18688 12.92H16.3869C17.0869 12.92 17.6569 13.49 17.6569 14.2C17.6769 16.89 15.4869 19.08 12.7969 19.08ZM16.2969 10.12C15.2669 10.12 14.4169 9.28 14.4169 8.24C14.4169 7.2 15.2569 6.36 16.2969 6.36C17.3369 6.36 18.1769 7.2 18.1769 8.24C18.1769 9.28 17.3269 10.12 16.2969 10.12Z"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  </View>
);

export default HappyIcon;
