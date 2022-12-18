import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import productsReducer from "../features/product-list/productsListSlice";

export default configureStore({
  reducer: {
    home: homeReducer,
    productsList: productsReducer,
  },
});
