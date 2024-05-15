import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAppointment } from "@app/models/Appointment";

export interface GetRequestsAppointmentsByRequestIdParams {
  requestId: string;
}
export interface GetRequestsAppointmentsByRequestIdResponseData {
  appointment: IAppointment;
}
export default apiActionBuilder<
  GetRequestsAppointmentsByRequestIdParams,
  ApiSuccessAction<
    GetRequestsAppointmentsByRequestIdResponseData,
    GetRequestsAppointmentsByRequestIdParams
  >,
  ApiFailAction<GetRequestsAppointmentsByRequestIdParams>
>(
  "apis/requests/{requestId}/appointments/get",
  (
    params: GetRequestsAppointmentsByRequestIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetRequestsAppointmentsByRequestIdParams>(
      {
        path: `/requests/${params.requestId}/appointments`,
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
