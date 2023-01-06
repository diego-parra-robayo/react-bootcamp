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
    updateHomeState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateHomeState } = homeSlice.actions;

export default homeSlice.reducer;
