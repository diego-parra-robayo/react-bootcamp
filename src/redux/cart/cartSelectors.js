import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsQty = createSelector(
  [selectCartItems],
  (items) => items.length
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumulator, item) =>
      accumulator + item.product.data.price * item.quantity,
    0
  )
);

export const selectItemById = (productId) =>
  createSelector([selectCartItems], (items) =>
    items.find((item) => item.product.id === productId)
  );
