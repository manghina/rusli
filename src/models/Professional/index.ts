import { Specialization } from "src/models/common/DoctorCommon";
import { IAddress } from "@app/models/Address";

export type OfficeLocation = { phone: string } & IAddress;

export interface IProfessional {
  _id: string;
  accountId: string;
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  specializations: Specialization[];
  city: string;
  alboId: string;
  profilePictureUrl?: string;
  created: Date;
  v: number;
  professionalPaperPhotoUrl?: string;
  phone: string;
  gender?: string;
  country?: string;
  bio?: string;
  website?: string;
  document?: string;
  specializationsDescription?: string;
  officeLocations?: ({ phone: string } & IAddress)[];
}

export type IProfessionalSummary = Pick<
  IProfessional,
  | "_id"
  | "name"
  | "lastName"
  | "email"
  | "specializations"
  | "profilePictureUrl"
  | "officeLocations"
>;

export class Professional implements IProfessional {
  _id!: string;
  accountId!: string;
  name!: string;
  lastName!: string;
  birthDate!: string;
  email!: string;
  specializations!: Specialization[];
  city!: string;
  alboId!: string;
  profilePictureUrl?: string;
  created!: Date;
  v!: number;
  professionalPaperPhotoUrl?: string;
  phone!: string;
  gender?: string;
  country?: string;
  bio?: string;
  website?: string;
  document?: string;
  specializationsDescription?: string;
  officeLocations?: ({ phone: string } & IAddress)[];

  constructor(iProfessional: IProfessional) {
    this.fromInterface(iProfessional);
  }

  fromInterface(iProfessional: IProfessional) {
    this._id = iProfessional._id;
    this.accountId = iProfessional.accountId;
    this.name = iProfessional.name;
    this.lastName = iProfessional.lastName;
    this.birthDate = iProfessional.birthDate;
    this.email = iProfessional.email;
    this.specializations = iProfessional.specializations;
    this.city = iProfessional.city;
    this.alboId = iProfessional.alboId;
    this.profilePictureUrl = iProfessional.profilePictureUrl;
    this.created = iProfessional.created;
    this.v = iProfessional.v;
    this.professionalPaperPhotoUrl = iProfessional.professionalPaperPhotoUrl;
    this.phone = iProfessional.phone;
    this.gender = iProfessional.gender;
    this.country = iProfessional.country;
    this.bio = iProfessional.bio;
    this.website = iProfessional.website;
    this.document = iProfessional.document;
    this.specializationsDescription = iProfessional.specializationsDescription;
    this.officeLocations = iProfessional.officeLocations;
  }
}
