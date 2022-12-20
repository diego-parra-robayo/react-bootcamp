import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessage: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return { ...state, alertMessage: action.payload };
    },
    alertMessageShown: (state) => {
      return { ...state, alertMessage: null };
    },
  },
});

export const { showAlert, alertMessageShown } = appSlice.actions;

export const selectAlertMessage = (state) => state.app.alertMessage;

export default appSlice.reducer;
