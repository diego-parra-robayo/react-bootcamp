import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getProductCategories } from "../../data/categoriesApi";
import { getProducts } from "../../data/productsApi";

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

const { updateState } = productsListSlice.actions;

export const loadCategories = () => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const categories = await getProductCategories();
    dispatch(updateState({ isLoading: false, categories: categories.results }));
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export const loadProducts =
  (page = 1) =>
  async (dispatch) => {
    dispatch(updateState({ isLoading: true }));
    try {
      const products = await getProducts({ params: { page } });
      dispatch(
        updateState({
          isLoading: false,
          products: products.results,
          page: products.page,
          totalPages: products.total_pages,
        })
      );
    } catch (err) {
      dispatch(updateState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export const setCategories =
  (categoriesIds = []) =>
  async (dispatch) => {
    dispatch(updateState({ selectedCategoriesIds: categoriesIds }));
  };

export const setPage = (page) => (dispatch) => dispatch(loadProducts(page));

export const selectProductsListIsLoading = (state) =>
  state.productsList.isLoading;

export const selectProductsListCategories = createSelector(
  [
    (state) => state.productsList.categories ?? [],
    (state) => state.productsList.selectedCategoriesIds ?? [],
  ],
  (categories, selectedIds) =>
    categories.map((category) => ({
      ...category,
      selected: selectedIds.includes(category.id),
    }))
);

export const selectProductsListFilteredProds = createSelector(
  [
    (state) => state.productsList.products ?? [],
    (state) => state.productsList.selectedCategoriesIds ?? [],
  ],
  (products, selectedIds) => {
    if (selectedIds.length === 0) return products;
    return (
      products?.filter((product) =>
        selectedIds.includes(product.data.category.id)
      ) ?? []
    );
  }
);

export const selectProductsListPage = (state) => state.productsList.page;

export const selectProductsListTotalPages = (state) =>
  state.productsList.totalPages;

export default productsListSlice.reducer;
