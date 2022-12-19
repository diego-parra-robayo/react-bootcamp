import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import productsReducer from "../features/product-list/productsListSlice";
import productDetailReducer from "../features/product-detail/productDetailSlice";

export default configureStore({
  reducer: {
    home: homeReducer,
    productsList: productsReducer,
    productDetail: productDetailReducer,
  },
});
