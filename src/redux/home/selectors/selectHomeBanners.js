import { createSelector } from "@reduxjs/toolkit";
import selectHomeState from "./selectHomeState";

const selectHomeBanners = createSelector(
  selectHomeState,
  (state) => state.banners ?? []
);

export default selectHomeBanners;
