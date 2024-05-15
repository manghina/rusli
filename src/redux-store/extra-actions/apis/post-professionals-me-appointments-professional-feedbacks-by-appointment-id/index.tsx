import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAppointment, ProfessionalFeedback } from "@app/models/Appointment";

export interface PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams {
  appointmentId: string;
  feedback: ProfessionalFeedback;
}
export interface PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdResponseData {
  appointment: IAppointment;
}
export default apiActionBuilder<
  PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams,
  ApiSuccessAction<
    PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdResponseData,
    PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams
  >,
  ApiFailAction<PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams>
>(
  "apis/professionals/me/appointments/{appointmentId}/professional-feedbacks/post",
  (
    params: PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<PostProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentIdParams>(
        {
          path: `/professionals/me/appointments/${params.appointmentId}/professional-feedbacks`,
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
