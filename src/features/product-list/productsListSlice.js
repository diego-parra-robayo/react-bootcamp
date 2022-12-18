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

export const productsListPageStarted = () => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const categoriesResult = await getProductCategories();
    dispatch(
      updateState({
        isLoading: false,
        categories:
          categoriesResult.results?.map((category) => ({
            ...category,
            selected: false,
          })) ?? [],
        products: mockedProducts.results ?? [],
      })
    );
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export const toggleCategory = (categoryId) => async (dispatch, getState) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const categories = selectProductsListCategories(getState()).map(
      (category) => {
        if (category.id === categoryId)
          return { ...category, selected: !category.selected };
        return category;
      }
    );
    const selectedCategoriesIds = categories
      .filter((category) => category.selected)
      .map((category) => category.id);
    const products = mockedProducts.results.filter((product) =>
      selectedCategoriesIds.includes(product.data.category.id)
    );
    dispatch(updateState({ isLoading: false, categories, products }));
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
