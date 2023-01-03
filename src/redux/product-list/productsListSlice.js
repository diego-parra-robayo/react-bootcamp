import { createSlice } from "@reduxjs/toolkit";
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

export const productListStarted = () => async (dispatch) => {
  dispatch(loadCategories());
  dispatch(loadProducts());
};

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

export default productsListSlice.reducer;
