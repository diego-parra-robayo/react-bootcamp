import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import bannersReducer from "../features/home/bannersSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export default configureStore({
  reducer: {
    banners: bannersReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
});
