import { createSelector } from "@reduxjs/toolkit";

const selectHomeState = (state) => state.home;

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