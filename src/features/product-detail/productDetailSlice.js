import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../data/productsApi";

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

const { updateState } = productDetailSlice.actions;

export const productDetailStarted = (productId) => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const product = await getProduct(productId);
    dispatch(updateState({ isLoading: false, product: product.results[0] }));
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export const selectProductDetailIsLoading = (state) =>
  state.productDetail.isLoading;

export const selectProductDetailProduct = (state) =>
  state.productDetail.product;

export default productDetailSlice.reducer;
