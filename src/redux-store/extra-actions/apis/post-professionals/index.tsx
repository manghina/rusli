import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "@app/models/Account";
import { IAddress } from "@app/models/Address";
import { IProfessional } from "@app/models/Professional";

export interface PostProfessionalsParams {
  name: string;
  lastName: string;
  birthDate: string;
  specializations: string[];
  city: string;
  alboId: string;
  professionalPaperPhotoId: string;
  phone: string;
  officeLocations: ({ phone: string } & { address: IAddress })[];
}
export interface PostProfessionalsResponseData {
  account: IAccount;
  professional: IProfessional;
}
export default apiActionBuilder<
  PostProfessionalsParams,
  ApiSuccessAction<PostProfessionalsResponseData, PostProfessionalsParams>,
  ApiFailAction<PostProfessionalsParams>
>(
  "apis/professionals/post",
  (
    params: PostProfessionalsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostProfessionalsParams>(
      {
        path: "/professionals",
        method: HttpMethod.POST,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
