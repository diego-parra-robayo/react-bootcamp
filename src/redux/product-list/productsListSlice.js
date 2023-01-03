import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categories: [],
  selectedCategoriesIds: [],
  products: [],
  page: 1,
  totalPages: 1,
  error: null,
};

const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateState } = productsListSlice.actions;

export default productsListSlice.reducer;
