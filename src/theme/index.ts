import { ThemeManager, Typography } from "react-native-ui-lib";
import { colorTokens } from "./colors/tokens";
import { textVariants } from "./typographies/variants";

export const initTheme = () => {
  Typography.loadTypographies({
    h1: { ...textVariants.h1CondensedBlackNormal },
    h2: { ...textVariants.h2CondensedBlackNormal },
    h3: { ...textVariants.h3CondensedBlackNormal },
    h4: { ...textVariants.h4CondensedBlackNormal },
    h5: { ...textVariants.h5CondensedBlackNormal },
    h6: { ...textVariants.h6CondensedBlackNormal },
  });

  ThemeManager.setComponentTheme("Text", {
    color: colorTokens.colorTextDefault,
  });

  ThemeManager.setComponentTheme("TextField", {
    regular16: true,
    selectionColor: colorTokens.colorBorderFocused,
  });
};
