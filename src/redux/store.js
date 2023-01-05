import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/homeSlice";
import productsReducer from "./product-list/productsListSlice";
import productDetailReducer from "./product-detail/productDetailSlice";
import searchReducer from "./search/searchSlice";
import { persistedCartReducer } from "./cart/cartSlice";
import appReducer from "./appSlice";
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
