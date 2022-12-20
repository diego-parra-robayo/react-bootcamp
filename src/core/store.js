import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import productsReducer from "../features/product-list/productsListSlice";
import productDetailReducer from "../features/product-detail/productDetailSlice";
import searchReducer from "../features/product-search/searchSlice";
import cartReducer from "../features/cart/cartSlice";
import appReducer from "../features/app/appSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    productsList: productsReducer,
    productDetail: productDetailReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});
