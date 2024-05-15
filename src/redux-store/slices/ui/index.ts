import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as selectors from "@app/redux-store/slices/ui/ui.selectors";
import {
  SetDialogOpenAction,
  SetForgotPasswordStepperCounterAction,
  UiState,
} from "@app/redux-store/slices/ui/ui.interfaces";
import * as extraActions from "@app/redux-store/extra-actions";
import * as sagas from "@app/redux-store/slices/ui/ui.sagas";
import NavigationService from "@app/models/NavigationService";
import { ProfessionalFeedbackReceivedScreen } from "@app/screens/ProfessionalFeedbackReceived";

const initialState: UiState = {
  isDialogOpen: {},
  forgotPasswordStepperCounter: 1,
  professionalRegisterStepperCounter: 1,
  isOtpError: null,
};

export const uiStore = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDialogOpen: (state, action: SetDialogOpenAction) => {
      state.isDialogOpen = {
        ...(state.isDialogOpen ?? initialState.isDialogOpen),
        [action.payload.dialogType]: action.payload.open,
      };
    },
    setForgotPasswordStepperCounter: (
      state,
      action: SetForgotPasswordStepperCounterAction,
    ) => {
      state.forgotPasswordStepperCounter = action.payload;
    },
    setProfessionalRegisterStepperCounter: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.professionalRegisterStepperCounter = action.payload;
    },
    setIsOtpError: (state, action: PayloadAction<boolean | null>) => {
      state.isOtpError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(extraActions.appStartup, (state) => {
      state.isDialogOpen = {
        ...initialState.isDialogOpen,
      };
      state.forgotPasswordStepperCounter =
        initialState.forgotPasswordStepperCounter;
      state.professionalRegisterStepperCounter =
        initialState.professionalRegisterStepperCounter;
      state.isOtpError = initialState.isOtpError;
    });
    builder.addCase(extraActions.clearSession, (state, action) => {
      state.isDialogOpen = initialState.isDialogOpen;
      state.forgotPasswordStepperCounter =
        initialState.forgotPasswordStepperCounter;
      state.professionalRegisterStepperCounter =
        initialState.professionalRegisterStepperCounter;
      state.isOtpError = initialState.isOtpError;
    });
    builder.addCase(
      extraActions
        .postProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentId
        .success,
      () => {
        NavigationService.reset({
          index: 0,
          routes: [{ name: ProfessionalFeedbackReceivedScreen.RouteName }],
        });
      },
    );
  },
});

export { selectors, sagas };
