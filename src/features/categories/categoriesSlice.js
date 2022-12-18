import { apiSlice } from "../api/rtk/apiSlice";
import { createSelector } from "@reduxjs/toolkit";
import { selectCategoriesIdsFilter } from "../products/productsSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductCategories: builder.query({
      query: () =>
        `/documents/search?q=${encodeURIComponent(
          '[[at(document.type, "category")]]'
        )}&lang=en-us&pageSize=30`,
    }),
  }),
});

export const selectCategoriesResult =
  extendedApiSlice.endpoints.getProductCategories.select();

export const selectCategories = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data?.results
);
export const selectCategoriesWithFilterState = createSelector(
  [selectCategories, selectCategoriesIdsFilter],
  (categories, categoriesFilterIds) => {
    return categories.map((category) => ({
      ...category,
      selected: categoriesFilterIds.includes(category.id),
    }));
  }
);

export const { useGetProductCategoriesQuery } = extendedApiSlice;
