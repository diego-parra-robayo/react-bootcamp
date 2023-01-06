import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCartState } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};

export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);
