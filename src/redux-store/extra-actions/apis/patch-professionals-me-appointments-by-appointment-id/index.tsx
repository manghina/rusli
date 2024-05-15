import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";
import { AppointmentStatus, IAppointment } from "@app/models/Appointment";

export interface PatchProfessionalsMeAppointmentsByAppointmentIdParams {
  appointmentId: string;
  status: AppointmentStatus;
}

export interface PatchProfessionalsMeAppointmentsByAppointmentIdResponseData {
  appointment: IAppointment;
  professionalOffer: IProfessionalOffer;
}

export default apiActionBuilder<
  PatchProfessionalsMeAppointmentsByAppointmentIdParams,
  ApiSuccessAction<
    PatchProfessionalsMeAppointmentsByAppointmentIdResponseData,
    PatchProfessionalsMeAppointmentsByAppointmentIdParams
  >,
  ApiFailAction<PatchProfessionalsMeAppointmentsByAppointmentIdParams>
>(
  "apis/professionals/me/appointments/{appointmentId}/patch",
  (
    params: PatchProfessionalsMeAppointmentsByAppointmentIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<PatchProfessionalsMeAppointmentsByAppointmentIdParams>(
        {
          path: `/professionals/me/appointments/${params.appointmentId}`,
          method: HttpMethod.PATCH,
          body: {
            status: params.status,
          },
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
