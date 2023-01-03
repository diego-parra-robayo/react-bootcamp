import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  banners: [],
  categories: [],
  products: [],
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateState } = homeSlice.actions;

export default homeSlice.reducer;
