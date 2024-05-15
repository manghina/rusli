import { useEmailVerificationScreen } from "./index.hooks";
import { OtpVerification } from "@app/components/OtpVerification";
import { ScreenView } from "@app/components/_ui/ScreenView/ScreenView";

export const EmailVerificationScreen = () => {
  const { handleEmailVerification, handleResendEmailOtp, handleGoBack } =
    useEmailVerificationScreen();

  return (
    <ScreenView hasScroll={false}>
      <OtpVerification
        componentProps={{
          componentTitle: "Verifica email",
          componentDescription:
            "Inserisci il codice numerico che abbiamo inviato al tuo indirizzo email",
        }}
        handleVerification={handleEmailVerification}
        handleResendCode={handleResendEmailOtp}
        goBackText="Torna alla schermata di login"
        handleGoBack={handleGoBack}
      />
    </ScreenView>
  );
};

EmailVerificationScreen.displayName = "EmailVerificationScreen";
EmailVerificationScreen.RouteName = "email-verification" as const;
