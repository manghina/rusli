import { IAppointment } from "@app/models/Appointment";

export interface AppointmentState {
  currentAppointment: IAppointment | null;
}
