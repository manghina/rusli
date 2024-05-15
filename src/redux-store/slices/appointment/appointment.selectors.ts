import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@app/redux-store";
import { Appointment } from "@app/models/Appointment";

export const getCurrentAppointment = createSelector(
  (state: RootState) => state?.appointment?.currentAppointment ?? null,
  (currentAppointmentData) =>
    currentAppointmentData ? new Appointment(currentAppointmentData) : null,
);
