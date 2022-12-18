import { configureStore } from "@reduxjs/toolkit";
import apiRefReducer from "../features/api/rtk/apiRefSlice";
import productsReducer from "../features/products/productsSlice";
import bannersReducer from "../features/api/axios/bannersSlice";
import { apiSlice } from "../features/api/rtk/apiSlice";

export default configureStore({
  reducer: {
    apiRef: apiRefReducer,
    banners: bannersReducer,
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
