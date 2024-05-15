import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { Alert } from "react-native";
import { ProfessionalOfferStatus } from "@app/models/ProfessionalOffer";
import { RequestStatus } from "@app/models/Request";
import { useNavigation } from "@react-navigation/native";
import { RequestReviewByProfessionalScreen } from "@app/screens/RequestReviewByProfessional";
import { AppointmentStatus } from "@app/models/Appointment";

export enum ProfessionalOfferDecision {
  NONE,
  ACCEPT,
  REJECT,
  CALL_ER,
}

export const useProfessionalOfferDetailScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const [decision, setDecision] = React.useState<ProfessionalOfferDecision>(
    ProfessionalOfferDecision.NONE,
  );

  const currentAppointment = useSelector(selectors.getCurrentAppointment);
  const currentProfessionalOffer = useSelector(
    selectors.getCurrentProfessionalOffer,
  );
  const isFetchingAppointment = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.getRequestsAppointmentsByRequestId.api,
    ),
  );
  const isFetchingProfessionalOffer = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.getProfessionalsMeProfessionalOffersByProfessionalOfferId.api,
    ),
  );
  const isPatchingAppointment = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions.patchProfessionalsMeAppointmentsByAppointmentOfferId.api,
    ),
  );

  const onAcceptRequestPressed = useCallback(() => {
    setDecision(ProfessionalOfferDecision.ACCEPT);
  }, []);
  const onRejectRequestPressed = useCallback(() => {
    Alert.alert("TODO: Rejection");
  }, []);
  const onCallERPressed = useCallback(() => {
    Alert.alert("TODO: Call ER");
  }, []);
  const onVisitCompletedPressed = useCallback(() => {
    if (currentAppointment) {
      dispatch(
        actions.patchProfessionalsMeAppointmentsByAppointmentOfferId.request({
          appointmentId: currentAppointment._id,
          status: AppointmentStatus.COMPLETED,
        }),
      );
    }
  }, [dispatch, currentAppointment]);
  const onPatientLatePressed = useCallback(() => {
    Alert.alert("TODO: Patient late");
  }, []);
  const onLeaveAReviewPressed = useCallback(() => {
    navigation.navigate(RequestReviewByProfessionalScreen.RouteName);
  }, [navigation]);
  const onReportProblemPressed = useCallback(() => {
    Alert.alert("TODO: Report problem");
  }, []);

  const screenTitle = useMemo(() => {
    switch (currentProfessionalOffer?.status) {
      case ProfessionalOfferStatus.Pending:
        return "Richiesta di visita";
      case ProfessionalOfferStatus.Accepted:
      case ProfessionalOfferStatus.readyToBeAccepted:
        return "Appuntamento";
      case ProfessionalOfferStatus.Refused:
        return "Richiesta rifiutata";
      default:
        return "";
    }
  }, [currentProfessionalOffer?.status]);
  const screenSubtitle = useMemo(() => {
    switch (currentProfessionalOffer?.status) {
      case ProfessionalOfferStatus.Pending:
        return "Sweep ha individuato Lei come miglior medico per questo paziente!";
      case ProfessionalOfferStatus.readyToBeAccepted:
        return "Sweep sta contattando il paziente e le darà conferma sull'esito della prenotazione";
      case ProfessionalOfferStatus.Accepted: {
        switch (currentProfessionalOffer.request.currentStatus) {
          case RequestStatus.APPOINTMENT_SCHEDULED:
            return "Il paziente ha confermato la visita!";
          case RequestStatus.APPOINTMENT_COMPLETED:
            return "Il paziente è stato visitato! Lasci un feedback ed aiuti Sweep a diventare molto più in gamba!";
          default:
            return "";
        }
      }
      default:
        return "";
    }
  }, [
    currentProfessionalOffer?.status,
    currentProfessionalOffer?.request?.currentStatus,
  ]);

  useEffect(() => {
    if (
      currentProfessionalOffer?.status === ProfessionalOfferStatus.Accepted &&
      currentProfessionalOffer?.request?.currentStatus ===
        RequestStatus.APPOINTMENT_SCHEDULED
    ) {
      dispatch(
        actions.getRequestsAppointmentsByRequestId.request({
          requestId: currentProfessionalOffer.request._id,
        }),
      );
    }
  }, [dispatch]);

  return {
    currentProfessionalOffer,
    currentAppointment,
    screenTitle,
    screenSubtitle,
    isFetchingProfessionalOffer,
    isFetchingAppointment,
    isPatchingAppointment,
    onAcceptRequestPressed,
    onRejectRequestPressed,
    onVisitCompletedPressed,
    onPatientLatePressed,
    onLeaveAReviewPressed,
    onReportProblemPressed,
    onCallERPressed,
    decision,
  };
};
