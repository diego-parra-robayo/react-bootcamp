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
    updateProductDetailState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProductDetailState } = productDetailSlice.actions;

export default productDetailSlice.reducer;
