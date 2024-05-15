import { IProfessionalOfferSummary } from "../ProfessionalOffer";
import { OfficeLocation } from "@app/models/Professional";

export enum AppointmentStatus {
  PROPOSED = "proposed",
  BOOKED = "booked",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  NOSHOW = "noshow",
}

export type ProfessionalFeedback = {
  sweepRating: 0 | 1 | 2 | 3 | 4 | 5;
  sweepPositives?: string;
  sweepNegatives?: string;
  userRating: 0 | 1 | 2 | 3 | 4 | 5;
  userComments?: string;
};

export type UserFeedback = {
  professionalRating: 0 | 1 | 2 | 3 | 4 | 5;
  professionalPositives?: string;
  professionalNegatives?: string;
};

export type IAppointment = {
  _id: string;
  /**
   * the status of appointment
   */
  status?: AppointmentStatus;
  professionalOffer?: IProfessionalOfferSummary;
  /**
   * When appointment is to take place
   */
  start?: Date;
  /**
   * When appointment is to conclude
   */
  end?: Date;
  /**
   * Can be less than start/end (e.g. estimate)
   */
  minutesDuration?: number;
  professionalFeedback?: ProfessionalFeedback;
  userFeedback?: UserFeedback;
  officeLocation: OfficeLocation;
  cancelUser?: "user" | "professional" | "admin";
};

export class Appointment implements IAppointment {
  _id!: string;
  status?: AppointmentStatus;
  professionalOffer?: IProfessionalOfferSummary;
  start?: Date;
  end?: Date;
  minutesDuration?: number;
  price?: number;
  professionalFeedback?: ProfessionalFeedback;
  userFeedback?: UserFeedback;
  officeLocation!: OfficeLocation;
  cancelUser?: "user" | "professional" | "admin";

  constructor(iAppointment: IAppointment) {
    this.fromInterface(iAppointment);
  }

  fromInterface(iAppointment: IAppointment) {
    this._id = iAppointment._id;
    this.status = iAppointment.status;
    this.professionalOffer = iAppointment.professionalOffer;
    this.start = iAppointment.start;
    this.end = iAppointment.end;
    this.minutesDuration = iAppointment.minutesDuration;
    this.professionalFeedback = iAppointment.professionalFeedback;
    this.userFeedback = iAppointment.userFeedback;
    this.cancelUser = iAppointment.cancelUser;
    this.officeLocation = iAppointment.officeLocation;
  }
}
