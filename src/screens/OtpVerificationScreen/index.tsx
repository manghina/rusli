import { useOtpVerificationScreen } from "./index.hooks";
import { OtpVerification } from "@app/components/OtpVerification";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

export const OtpVerificationScreen = () => {
  const {
    componentDescription,
    componentTitle,
    handleGoBack,
    handleVerification,
    hideGoBack,
    handleResendCode,
  } = useOtpVerificationScreen();

  return (
    <ScreenView hasScroll={false}>
      <OtpVerification
        componentProps={{
          componentTitle,
          componentDescription,
        }}
        handleGoBack={handleGoBack}
        handleVerification={handleVerification}
        hideGoBack={hideGoBack}
        handleResendCode={handleResendCode}
      />
    </ScreenView>
  );
};

OtpVerificationScreen.displayName = "OtpVerificationScreen";
OtpVerificationScreen.RouteName = "otp-verification" as const;
