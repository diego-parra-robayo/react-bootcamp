import { createSelector } from "@reduxjs/toolkit";

const selectProductsListCategories = createSelector(
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

export default selectProductsListCategories;
