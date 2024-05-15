import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useCallback, useEffect, useMemo } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { RequestCancelByUserScreen } from "@app/screens/RequestCancelByUser";

export const useUserRequestAppointmentDetailsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const currentRequest = useSelector(selectors.getCurrentRequest);
  const currentAppointment = useSelector(selectors.getCurrentAppointment);

  const visitDay = useMemo(
    () => moment(currentAppointment?.start),
    [currentAppointment],
  );

  const onAddToCalendarPressed = useCallback(() => {}, []);

  const onCancelRequestPressed = useCallback(() => {
    navigation.navigate(RequestCancelByUserScreen.RouteName);
  }, [navigation]);

  const onLeaveReviewPressed = useCallback(() => {}, [navigation]);

  useEffect(() => {
    if (currentRequest) {
      dispatch(
        actions.getRequestsAppointmentsByRequestId.request({
          requestId: currentRequest._id,
        }),
      );
    }
  }, [dispatch, currentRequest?._id]);

  return {
    currentRequest,
    currentAppointment,
    visitDay,
    onAddToCalendarPressed,
    onCancelRequestPressed,
    onLeaveReviewPressed,
  };
};

/*{currentRequest?.currentStatus ===
          RequestStatus.APPOINTMENT_COMPLETED && (
          <Button style={[styles.actionButton]} onPress={onLeaveReviewPressed}>
            <Text style={styles.actionText}>Lascia una recensione</Text>
          </Button>
        )}*/
