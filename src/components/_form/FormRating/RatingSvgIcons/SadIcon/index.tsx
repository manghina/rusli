import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "../styles";
import { colorTokens } from "../../../../../theme/colors/tokens";

type SadIconProps = {
  color?: string;
  selected?: boolean;
};

const SadIcon = ({ color, selected = false, ...props }: SadIconProps) => (
  <View style={[styles.container, selected && styles.selectedContainer]}>
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M16.3892 2H8.00922C4.36922 2 2.19922 4.17 2.19922 7.81V16.18C2.19922 19.83 4.36922 22 8.00922 22H16.3792C20.0192 22 22.1892 19.83 22.1892 16.19V7.81C22.1992 4.17 20.0292 2 16.3892 2ZM6.66922 9.28C6.37922 8.99 6.37922 8.51 6.66922 8.22C7.95922 6.93 10.0692 6.93 11.3692 8.22C11.6592 8.51 11.6592 8.99 11.3692 9.28C11.2192 9.43 11.0292 9.5 10.8392 9.5C10.6492 9.5 10.4592 9.43 10.3092 9.28C9.59922 8.57 8.43922 8.57 7.72922 9.28C7.43922 9.58 6.95922 9.58 6.66922 9.28ZM15.7992 18.08H8.59922C7.89922 18.08 7.32922 17.51 7.32922 16.8C7.32922 14.11 9.51922 11.92 12.2092 11.92C14.8992 11.92 17.0892 14.11 17.0892 16.8C17.0792 17.5 16.4992 18.08 15.7992 18.08ZM17.7292 9.28C17.4392 9.57 16.9592 9.57 16.6692 9.28C15.9592 8.57 14.7992 8.57 14.0892 9.28C13.9392 9.43 13.7492 9.5 13.5592 9.5C13.3692 9.5 13.1792 9.43 13.0292 9.28C12.7392 8.99 12.7392 8.51 13.0292 8.22C14.3192 6.93 16.4292 6.93 17.7292 8.22C18.0192 8.52 18.0192 8.99 17.7292 9.28Z"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  </View>
);

export default SadIcon;
