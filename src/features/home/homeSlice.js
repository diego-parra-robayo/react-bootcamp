import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getFeaturedBanners } from "../../data/bannersApi";
import { getProductCategories } from "../../data/categoriesApi";
import { getFeaturedProducts } from "../../data/productsApi";

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
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const { updateState } = homeSlice.actions;

export const homePageStarted = () => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const bannersResult = await getFeaturedBanners();
    const categoriesResult = await getProductCategories();
    const featuredProductsResult = await getFeaturedProducts();
    dispatch(
      updateState({
        isLoading: false,
        banners: bannersResult.results,
        categories: categoriesResult.results,
        products: featuredProductsResult.results,
      })
    );
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export const selectHomeState = (state) => state.home;

export const selectHomeIsLoading = createSelector(
  selectHomeState,
  (state) => state.isLoading ?? false
);
export const selectHomeBanners = createSelector(
  selectHomeState,
  (state) => state.banners ?? []
);
export const selectHomeCategories = createSelector(
  selectHomeState,
  (state) => state.categories ?? []
);
export const selectHomeProducts = createSelector(
  selectHomeState,
  (state) => state.products ?? []
);

export default homeSlice.reducer;
