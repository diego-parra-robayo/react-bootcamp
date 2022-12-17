import { createSlice } from "@reduxjs/toolkit";
import mockedBanners from "../../../mocks/en-us/featured-banners.json";
import { getFeaturedBanners } from "./bannerApi";

const initialState = {
  isLoading: false,
  data: mockedBanners.results,
  error: null,
};

const bannersSliceBasic = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setLoadingState: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setBanners: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

const { setLoadingState, setBanners, setError } = bannersSliceBasic.actions;

export const selectBannersResultBasic = (state) => state.banners;
export const selectBannersBasic = (state) => state.banners.data;

export const loadBanners = () => async (dispatch) => {
  dispatch(setLoadingState());
  try {
    const banners = await getFeaturedBanners();
    dispatch(setBanners(banners.data.results));
  } catch (err) {
    dispatch(setError(err));
  }
};

export default bannersSliceBasic.reducer;
