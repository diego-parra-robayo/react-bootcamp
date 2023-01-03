import { createSelector } from "@reduxjs/toolkit";
import selectHomeState from "./selectHomeState";

const selectHomeProducts = createSelector(
  selectHomeState,
  (state) => state.products ?? []
);

export default selectHomeProducts;
