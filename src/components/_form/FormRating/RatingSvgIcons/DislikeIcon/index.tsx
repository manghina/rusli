import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { styles } from "../styles";
import { colorTokens } from "../../../../../theme/colors/tokens";

type DislikeIconProps = {
  color?: string;
  selected?: boolean;
};

const DislikeIcon = ({
  color,
  selected = false,
  ...props
}: DislikeIconProps) => (
  <View style={[styles.container, selected && styles.selectedContainer]}>
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fill={color ?? colorTokens.colorIcon} 
        d="M16.0104 5.50002V15.66C16.0104 16.06 15.8904 16.45 15.6704 16.78L12.9404 20.84C12.5104 21.49 11.4404 21.95 10.5304 21.61C9.55041 21.28 8.90041 20.18 9.11041 19.2L9.63041 15.93C9.67041 15.63 9.59041 15.36 9.42041 15.15C9.25041 14.96 9.00041 14.84 8.73041 14.84H4.62041C3.83041 14.84 3.15041 14.52 2.75041 13.96C2.37041 13.42 2.30041 12.72 2.55041 12.01L5.01041 4.52002C5.32041 3.28002 6.67041 2.27002 8.01041 2.27002H11.9104C12.5804 2.27002 13.5204 2.50002 13.9504 2.93002L15.2304 3.92002C15.7204 4.30002 16.0104 4.88002 16.0104 5.50002Z"
      />
      <Path
        d="M19.1907 17.6099H20.2207C21.7707 17.6099 22.4007 17.0099 22.4007 15.5299V5.4799C22.4007 3.9999 21.7707 3.3999 20.2207 3.3999H19.1907C17.6407 3.3999 17.0107 3.9999 17.0107 5.4799V15.5399C17.0107 17.0099 17.6407 17.6099 19.1907 17.6099Z"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  </View>
);

export default DislikeIcon;
