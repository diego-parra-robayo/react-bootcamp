import mockedProducts from "../../mocks/en-us/products.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesIds: [],
  products: mockedProducts.results,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFeaturedProductsResult: (state, action) => {
      return { ...initialState, products: action.payload };
    },
    setFilterByCategoriesResult: (state, action) => {
      const { categoriesIds, products } = action.payload;
      state.categoriesIds = categoriesIds;
      state.products = products;
    },
  },
});

export const { setFeaturedProductsResult, setFilterByCategoriesResult } =
  productsSlice.actions;

export const selectCategoriesIdsFilter = (state) =>
  state.products.categoriesIds;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
