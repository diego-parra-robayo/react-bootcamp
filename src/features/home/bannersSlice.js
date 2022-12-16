import { createSlice } from "@reduxjs/toolkit";
import mockedBanners from "../../mocks/en-us/featured-banners.json";

const initialState = mockedBanners.results;

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
});

export const selectBanners = (state) => state.banners;

export default bannersSlice.reducer;
