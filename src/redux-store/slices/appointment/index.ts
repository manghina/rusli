import { createSlice } from "@reduxjs/toolkit";
import { AppointmentState } from "./appointment.interfaces";
import * as selectors from "./appointment.selectors";
import * as sagas from "./appointment.sagas";
import * as extraActions from "@app/redux-store/extra-actions";

const initialState: AppointmentState = {
  currentAppointment: null,
};

export const appointmentStore = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      extraActions.getRequestsAppointmentsByRequestId.success,
      (state, action) => {
        state.currentAppointment = action.payload.data.appointment;
      },
    );
    builder.addCase(extraActions.appStartup, (state, action) => {
      state.currentAppointment = null;
    });
    builder.addCase(
      extraActions.patchProfessionalsMeAppointmentsByAppointmentOfferId.success,
      (state, action) => {
        state.currentAppointment = action.payload.data.appointment;
      },
    );
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.currentAppointment = null;
    });
  },
});

export { selectors, sagas };
