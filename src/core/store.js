import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../redux/home/homeSlice";
import productsReducer from "../redux/product-list/productsListSlice";
import productDetailReducer from "../redux/product-detail/productDetailSlice";
import searchReducer from "../redux/search/searchSlice";
import { persistedCartReducer } from "../redux/cart/cartSlice";
import appReducer from "../redux/appSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

export default configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    productsList: productsReducer,
    productDetail: productDetailReducer,
    search: searchReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
