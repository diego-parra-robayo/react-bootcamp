import { createSlice } from "@reduxjs/toolkit";
import mockedCategories from "../../mocks/en-us/product-categories.json";

const initialState = mockedCategories.results;

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectCategories = (state) => state.categories;

export default categoriesSlice.reducer;
