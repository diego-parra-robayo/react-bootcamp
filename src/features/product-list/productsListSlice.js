import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getProductCategories } from "../../data/categoriesApi";
import mockedProducts from "../../mocks/en-us/products.json";

const initialState = {
  isLoading: false,
  categories: [],
  products: [],
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

const { updateState } = productsListSlice.actions;

export const productsListPageStarted =
  (categoriesIds) => async (dispatch, getState) => {
    dispatch(updateState({ isLoading: true }));
    try {
      let categories = selectProductsListCategories(getState());
      if (!categories || categories.length === 0) {
        const categoriesResult = await getProductCategories();
        categories = categoriesResult.results;
      }
      categories =
        categories?.map((category) => ({
          ...category,
          selected: categoriesIds.includes(category.id),
        })) ?? [];
      const products =
        mockedProducts.results?.filter((product) =>
          categoriesIds.includes(product.data.category.id)
        ) ?? [];

      dispatch(
        updateState({
          isLoading: false,
          categories,
          products,
        })
      );
    } catch (err) {
      dispatch(updateState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export const selectProductsListState = (state) => state.productsList;

export const selectProductsListIsLoading = createSelector(
  selectProductsListState,
  (state) => state.isLoading ?? false
);
export const selectProductsListCategories = createSelector(
  selectProductsListState,
  (state) => state.categories ?? []
);
export const selectProductsListProducts = createSelector(
  selectProductsListState,
  (state) => state.products ?? []
);

export default productsListSlice.reducer;
