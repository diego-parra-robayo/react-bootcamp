import { createSelector } from "@reduxjs/toolkit";
import { selectCartItems } from "../cart/selectors";

export const selectProductDetailIsLoading = (state) =>
  state.productDetail.isLoading;

export const selectProductDetailProduct = (state) =>
  state.productDetail.product;

export const selectMaxStockAvailable = createSelector(
  [selectProductDetailProduct, selectCartItems],
  (product, cartItems) => {
    const currentQty =
      cartItems.find((item) => item.product.id === product.id)?.quantity ?? 0;
    const stock = product.data.stock;
    return currentQty < stock ? stock - currentQty : 0;
  }
);
