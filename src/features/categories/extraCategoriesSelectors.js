import { createSelector } from "@reduxjs/toolkit";
import { selectCategories } from "./categoriesSlice";
import { selectCategoriesIdsFilter } from "../products/productsSlice";

export const selectCategoriesWithFilterState = createSelector(
  [selectCategories, selectCategoriesIdsFilter],
  (categories, categoriesFilterIds) => {
    return categories.map((category) => ({
      ...category,
      selected: categoriesFilterIds.includes(category.id),
    }));
  }
);
