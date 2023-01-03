import { createSelector } from "@reduxjs/toolkit";
import selectHomeState from "./selectHomeState";

const selectHomeIsLoading = createSelector(
  selectHomeState,
  (state) => state.isLoading ?? false
);

export default selectHomeIsLoading;
