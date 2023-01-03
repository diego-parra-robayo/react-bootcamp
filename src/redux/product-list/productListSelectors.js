import { createSelector } from "@reduxjs/toolkit";

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
