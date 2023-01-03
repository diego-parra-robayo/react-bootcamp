import { createSelector } from "@reduxjs/toolkit";
import selectHomeState from "./selectHomeState";

const selectHomeCategories = createSelector(
  selectHomeState,
  (state) => state.categories ?? []
);

export default selectHomeCategories;
