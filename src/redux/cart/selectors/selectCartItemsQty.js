import { createSelector } from "@reduxjs/toolkit";
import selectCartItems from "./selectCartItems";

const selectCartItemsQty = createSelector(
  [selectCartItems],
  (items) => items.length
);

export default selectCartItemsQty;
