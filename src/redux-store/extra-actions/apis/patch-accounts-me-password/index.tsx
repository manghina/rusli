import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PatchAccountsMePasswordParams {
  currentPassword: string;
  newPassword: string;
}
export interface PatchAccountsMePasswordResponseData {
  message: string;
}
export default apiActionBuilder<
  PatchAccountsMePasswordParams,
  ApiSuccessAction<
    PatchAccountsMePasswordResponseData,
    PatchAccountsMePasswordParams
  >,
  ApiFailAction<PatchAccountsMePasswordParams>
>(
  "apis/accounts/me/passwords/patch",
  (
    params: PatchAccountsMePasswordParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchAccountsMePasswordParams>(
      {
        path: "/accounts/me/password",
        method: HttpMethod.PATCH,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
