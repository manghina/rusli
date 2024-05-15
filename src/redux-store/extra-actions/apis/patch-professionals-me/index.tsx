import { IAddress } from "@app/models/Address";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessional } from "@app/models/Professional";

export interface PatchProfessionalsMeParams {
  name?: string;
  lastName?: string;
  birthDate?: string;
  profilePictureId?: string;
  alboId?: string;
  specializations?: string[];
  city?: string;
  professionalPaperPhotoId?: string;
  phone?: string;
  country?: string;
  gender?: string;
  bio?: string;
  website?: string;
  document?: string;
  specializationsDescription?: string;
  officeLocations?: ({ phone: string } & { address: IAddress })[];
}
export interface PatchProfessionalsMeResponseData {
  professional: IProfessional;
}
export default apiActionBuilder<
  PatchProfessionalsMeParams,
  ApiSuccessAction<
    PatchProfessionalsMeResponseData,
    PatchProfessionalsMeParams
  >,
  ApiFailAction<PatchProfessionalsMeParams>
>(
  "apis/professionals/me/patch",
  (
    params: PatchProfessionalsMeParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchProfessionalsMeParams>(
      {
        path: "/professionals/me",
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
