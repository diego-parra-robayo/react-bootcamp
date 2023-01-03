import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popUpMessage: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return { ...state, popUpMessage: action.payload };
    },
    alertMessageShown: (state) => {
      return { ...state, popUpMessage: null };
    },
  },
});

export const { showAlert, alertMessageShown } = appSlice.actions;

export const selectPopUpMessage = (state) => state.app.popUpMessage;

export default appSlice.reducer;
