import { FC, memo } from "react";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EmailVerificationScreen } from "@app/screens/EmailVerificationScreen";
import { FilterableSelectScreen } from "@app/screens/FilterableSelect";
import { ForgotPasswordScreen } from "@app/screens/ForgotPassword";
import { HeaderGoBack } from "@app/components/HeaderGoBack";
import { HeaderProfileGoBack } from "@app/components/HeaderProfileGoBack";
import { HomeScreen } from "@app/screens/Home";
import { LoaderScreen } from "@app/screens/Loader";
import { LoginScreen } from "@app/screens/Login";
import { OtpVerificationScreen } from "@app/screens/OtpVerificationScreen";
import { PasswordResetSuccessScreen } from "@app/screens/PasswordResetSuccess";
import { ProfessionalHomeScreen } from "@app/screens/ProfessionalHome";
import { ProfessionalOfferDetailScreen } from "@app/screens/ProfessionalOfferDetail";
import { ProfessionalRegisterScreen } from "@app/screens/ProfessionalRegister";
import { UserEditScreen } from "@app/screens/UserEdit";
import { ProfessionalProfileScreen } from "@app/screens/ProfessionalProfileScreen";
import { ProfessionalEditPrivateScreen } from "@app/screens/ProfessionalEditPrivate";
import { ProfessionalEditPublicScreen } from "@app/screens/ProfessionalEditPublic";
import { ProfessionalFeedbackReceivedScreen } from "@app/screens/ProfessionalFeedbackReceived";
import { RequestCancelByProfessionalScreen } from "@app/screens/RequestCancelByProfessional";
import { RequestCancelByUserScreen } from "@app/screens/RequestCancelByUser";
import { RequestChatScreen } from "@app/screens/RequestChat";
import { RequestConfirmPaymentScreen } from "@app/screens/RequestConfirmPayment";
import { RequestPaymentSucceededScreen } from "@app/screens/RequestPaymentSucceeded";
import { RequestReviewByProfessionalScreen } from "@app/screens/RequestReviewByProfessional";
import { RequestSearchProfessionalsScreen } from "@app/screens/RequestSearchProfessionals";
import { TutorialScreen } from "@app/screens/Tutorial";
import { UserChooseProfessionalOfferScreen } from "@app/screens/UserChooseProfessionalOffer";
import { UserHomeScreen } from "@app/screens/UserHome";
import { UserProfileScreen } from "src/screens/UserProfileScreen";
import { UserRegisterScreen } from "@app/screens/UserRegister";
import { UserRequestAppointmentDetailsScreen } from "@app/screens/UserRequestAppointmentDetails";
import { ProfileCredentialsScreen } from "@app/screens/ProfileCredentials";
import { ProfileEditPasswordScreen } from "@app/screens/ProfileEditPassword";
import { ContactUsScreen } from "@app/screens/ContactUs";

import { BackButton } from "@app/components/BackButton";
import { CustomToast } from "@app/components/CustomToast";
import { UserHeader } from "@app/components/_users/UserHeader";

import NavigationService from "@app/models/NavigationService";

import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

import { useAppContent } from "./index.hooks";
import { HeaderEmpty } from "../HeaderEmpty";
import { SettingsScreen } from "@app/screens/SettingsScreen";
import { FAQSUsercreen } from "@app/screens/FAQSUsercreen";

const Stack = createNativeStackNavigator();

export const AppContent: FC = memo(({}) => {
  const {} = useAppContent();

  return (
    <>
      <CustomToast />
      <NavigationContainer
        ref={(navRef) => {
          if (navRef) {
            NavigationService.setNavigationRef(navRef);
          }
        }}
      >
        <Stack.Navigator initialRouteName={LoaderScreen.RouteName}>
          <Stack.Screen
            name={FilterableSelectScreen.RouteName}
            component={FilterableSelectScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={OtpVerificationScreen.RouteName}
            component={OtpVerificationScreen}
            options={({ route }) => ({
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              // @ts-ignore
              headerShown: route.params?.hideHeader ? false : true,
              // @ts-ignore
              gestureEnabled: route.params?.hideGoBack ? false : true,
              headerTransparent: true,
            })}
          />
          <Stack.Screen
            name={EmailVerificationScreen.RouteName}
            component={EmailVerificationScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              gestureEnabled: false,
              header: () => <HeaderEmpty />,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={LoaderScreen.RouteName}
            component={LoaderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={TutorialScreen.RouteName}
            component={TutorialScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={HomeScreen.RouteName}
            component={HomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "#97B5Ed",
            }}
          />
          <Stack.Screen
            name={LoginScreen.RouteName}
            component={LoginScreen}
            options={{
              title: "Accedi",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              headerShadowVisible: false,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={ForgotPasswordScreen.RouteName}
            component={ForgotPasswordScreen}
            options={{
              title: "",
              header: () => <HeaderGoBack />,
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={PasswordResetSuccessScreen.RouteName}
            component={PasswordResetSuccessScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={UserRegisterScreen.RouteName}
            component={UserRegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={ProfessionalRegisterScreen.RouteName}
            component={ProfessionalRegisterScreen}
            options={{
              title: "Registrati",
              headerTitleAlign: "center",
              headerTitleStyle: {
                ...textVariants.h3CondensedBlackNormal,
                color: colorTokens.colorTextDefault,
              },
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              headerLeft: () => <BackButton />,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name={ProfessionalHomeScreen.RouteName}
            component={ProfessionalHomeScreen}
            options={{
              headerShown: false,
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={RequestCancelByUserScreen.RouteName}
            component={RequestCancelByUserScreen}
            options={{
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={ProfessionalOfferDetailScreen.RouteName}
            component={ProfessionalOfferDetailScreen}
            options={{
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "slide_from_bottom",
              statusBarAnimation: "slide",
              statusBarStyle: "dark",
              statusBarColor: "white",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={ProfessionalFeedbackReceivedScreen.RouteName}
            component={ProfessionalFeedbackReceivedScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
              statusBarStyle: Platform.OS === "ios" ? "inverted" : "dark",
            }}
          />
          <Stack.Screen
            name={UserHomeScreen.RouteName}
            component={UserHomeScreen}
            options={{
              header: () => <UserHeader />,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={UserProfileScreen.RouteName}
            component={UserProfileScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderProfileGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ProfessionalProfileScreen.RouteName}
            component={ProfessionalProfileScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderProfileGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={UserEditScreen.RouteName}
            component={UserEditScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ProfessionalEditPrivateScreen.RouteName}
            component={ProfessionalEditPrivateScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ProfessionalEditPublicScreen.RouteName}
            component={ProfessionalEditPublicScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ContactUsScreen.RouteName}
            component={ContactUsScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ProfileCredentialsScreen.RouteName}
            component={ProfileCredentialsScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={ProfileEditPasswordScreen.RouteName}
            component={ProfileEditPasswordScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={SettingsScreen.RouteName}
            component={SettingsScreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
              headerTransparent: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name={FAQSUsercreen.RouteName}
            component={FAQSUsercreen}
            options={{
              animation: "slide_from_bottom",
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={RequestCancelByProfessionalScreen.RouteName}
            component={RequestCancelByProfessionalScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={RequestChatScreen.RouteName}
            component={RequestChatScreen}
            options={{
              animation: "slide_from_bottom",
              headerTransparent: true,
              headerTitle: "",
              headerLeft: () => <BackButton variant="dark" />,
              statusBarStyle: Platform.OS === "ios" ? "inverted" : "dark",
            }}
          />
          <Stack.Screen
            name={RequestSearchProfessionalsScreen.RouteName}
            component={RequestSearchProfessionalsScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
          <Stack.Screen
            name={UserChooseProfessionalOfferScreen.RouteName}
            component={UserChooseProfessionalOfferScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={RequestConfirmPaymentScreen.RouteName}
            component={RequestConfirmPaymentScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={RequestPaymentSucceededScreen.RouteName}
            component={RequestPaymentSucceededScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={UserRequestAppointmentDetailsScreen.RouteName}
            component={UserRequestAppointmentDetailsScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name={RequestReviewByProfessionalScreen.RouteName}
            component={RequestReviewByProfessionalScreen}
            options={{
              animation: "slide_from_bottom",
              headerTintColor: "transparent",
              headerTransparent: true,
              header: () => <HeaderGoBack />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
});

AppContent.displayName = "AppContent";
