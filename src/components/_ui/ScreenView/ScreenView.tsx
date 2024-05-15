import { FC, PropsWithChildren } from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { styles } from "./styles";
import { View, ViewProps } from "react-native-ui-lib";
import { useHeaderHeight } from "@react-navigation/elements";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";

interface ScreenViewProps {
  /**
   * Determines if the screen has a keyboard, if so the screen will adjust its padding to avoid the keyboard. If set it will use the ScrollView component.
   * @default false
   */
  hasKeyboard?: boolean;
  /**
   * Determines if the screen has a scroll view.
   * @default true
   */
  hasScroll?: boolean;
  /**
   * Props for the ScrollView component. If provided the screen will use the ScrollView component.
   */
  scrollViewProps?: ScrollViewProps;
  /**
   * Custom styles for the container View component.
   */
  containerStyle?: ViewProps["style"];
  /**
   * Determines if the animated progress bar is enabled.
   * @default false
   */
  animatedProgressBar?: boolean;
  /**
   * The value of the progress bar.
   * @default 0
   */
  progressBarValue?: number;
  /**
   * The duration of the progress bar animation.
   * @default 250
   */
  progressBarDuration?: number;
}

/**
 * The ScreenView component is a wrapper component that provides a consistent layout for application screens.
 * It includes a header padding, a scroll view, and an animated progress bar.
 *
 * @remarks
 * To avoid unwanted padding top issues, make sure to use `headerTransparent: true` in the navigation options of the `Stack.Screen` component in `AppComponent`.
 *
 * @param {ScreenViewProps} props - The props for the ScreenView component.
 *
 * @example
 * ```tsx
 * <ScreenView
 *   hasKeyboard
 *   animatedProgressBar
 *   progressBarValue={50}
 * >
 *   <View>
 *     <Text>Screen content</Text>
 *   </View>
 * </ScreenView>
 * ```
 */
export const ScreenView = ({
  children,
  scrollViewProps,
  containerStyle,
  hasKeyboard = false,
  hasScroll = true,
  animatedProgressBar = false,
  progressBarValue = 0,
  progressBarDuration = 250,
}: PropsWithChildren<ScreenViewProps>) => {
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={[
        styles.pageView,
        {
          paddingTop: headerHeight,
        },
      ]}
    >
      {animatedProgressBar && (
        <AnimatedProgressBar
          value={progressBarValue}
          duration={progressBarDuration}
        />
      )}
      {hasScroll || hasKeyboard || scrollViewProps ? (
        <ScrollView
          style={styles.scrollView}
          automaticallyAdjustKeyboardInsets={hasKeyboard}
          keyboardShouldPersistTaps="handled"
          {...scrollViewProps}
        >
          <View style={[styles.container, containerStyle]}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.container, containerStyle]}>{children}</View>
      )}
    </View>
  );
};
