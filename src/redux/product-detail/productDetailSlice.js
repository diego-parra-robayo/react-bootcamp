import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  product: {},
  error: null,
};

const productDetailSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateState } = productDetailSlice.actions;

export default productDetailSlice.reducer;
