import { createSelector } from "@reduxjs/toolkit";
import selectCartItems from "./selectCartItems";

const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumulator, item) =>
      accumulator + item.product.data.price * item.quantity,
    0
  )
);

export default selectCartTotal;
