import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const apiRefSlice = createSlice({
  name: "apiRef",
  initialState,
  reducers: {
    updateApiRef: (state, action) => {
      return action.payload;
    },
    clearApiRef: () => {
      return null;
    },
  },
});

export const { updateApiRef, clearApiRef } = apiRefSlice.actions;

export const selectApiRef = (state) => state.apiRef;

export default apiRefSlice.reducer;
