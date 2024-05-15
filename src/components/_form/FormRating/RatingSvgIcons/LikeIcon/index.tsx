import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "../styles";
import { colorTokens } from "../../../../../theme/colors/tokens";

type LikeIconProps = {
  color?: string;
  selected?: boolean;
};

const LikeIcon = ({ color, selected = false, ...props }: LikeIconProps) => (
  <View style={[styles.container, selected && styles.selectedContainer]}>
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M8.99023 18.4902V8.33022C8.99023 7.93022 9.11023 7.54022 9.33023 7.21022L12.0602 3.15022C12.4902 2.50022 13.5602 2.04022 14.4702 2.38022C15.4502 2.71022 16.1002 3.81022 15.8902 4.79022L15.3702 8.06022C15.3302 8.36022 15.4102 8.63022 15.5802 8.84022C15.7502 9.03022 16.0002 9.15022 16.2702 9.15022H20.3802C21.1702 9.15022 21.8502 9.47022 22.2502 10.0302C22.6302 10.5702 22.7002 11.2702 22.4502 11.9802L19.9902 19.4702C19.6802 20.7102 18.3302 21.7202 16.9902 21.7202H13.0902C12.4202 21.7202 11.4802 21.4902 11.0502 21.0602L9.77023 20.0702C9.28023 19.7002 8.99023 19.1102 8.99023 18.4902Z"
        fill={color ?? colorTokens.colorIcon}
      />
      <Path
        d="M5.81059 6.37988H4.78059C3.23059 6.37988 2.60059 6.97988 2.60059 8.45988V18.5199C2.60059 19.9999 3.23059 20.5999 4.78059 20.5999H5.81059C7.36059 20.5999 7.99059 19.9999 7.99059 18.5199V8.45988C7.99059 6.97988 7.36059 6.37988 5.81059 6.37988Z"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  </View>
);

export default LikeIcon;
