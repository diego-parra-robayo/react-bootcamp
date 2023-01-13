import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemById = (productId) =>
  createSelector([selectCartItems], (items) =>
    items.find((item) => item.product.id === productId)
  );

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (items) => items.length
);

export const selectCartTotal = createSelector([selectCartItems], (items) => {
  const total = items.reduce(
    (accumulator, item) =>
      accumulator + item.product.data.price * item.quantity,
    0
  );
  return Math.round(total * 100) / 100;
});
