import { createSelector } from "@reduxjs/toolkit";
import selectCartItems from "./selectCartItems";

const selectItemById = (productId) =>
  createSelector([selectCartItems], (items) =>
    items.find((item) => item.product.id === productId)
  );

export default selectItemById;
