import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAppointment, UserFeedback } from "@app/models/Appointment";

export interface PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams {
  appointmentId: string;
  feedback: UserFeedback;
}
export interface PostUsersMeAppointmentsUserFeedbacksByAppointmentIdResponseData {
  appointment: IAppointment;
}
export default apiActionBuilder<
  PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams,
  ApiSuccessAction<
    PostUsersMeAppointmentsUserFeedbacksByAppointmentIdResponseData,
    PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams
  >,
  ApiFailAction<PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams>
>(
  "apis/users/me/appointments/{appointmentId}/user-feedbacks/post",
  (
    params: PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<PostUsersMeAppointmentsUserFeedbacksByAppointmentIdParams>(
        {
          path: `/users/me/appointments/${params.appointmentId}/user-feedbacks`,
          method: HttpMethod.POST,
          body: {
            feedback: params.feedback,
          },
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
