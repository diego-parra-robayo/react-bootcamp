import { createSelector } from "@reduxjs/toolkit";

const selectProductsListFilteredProds = createSelector(
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

export default selectProductsListFilteredProds;
