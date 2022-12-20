import { createSelector, createSlice } from "@reduxjs/toolkit";
import { showAlert } from "../app/appSlice";
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
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const { updateState } = cartSlice.actions;

export const cartAddProductToCart =
  (product, quantity = 1) =>
  async (dispatch, getState) => {
    dispatch(updateState({ isLoading: true }));
    const items = [...selectCartItems(getState())];
    const index = items.findIndex((item) => item.product.id === product.id);
    if (index === -1) {
      items.push({ product, quantity: quantity });
    } else {
      items[index] = {
        product: items[index].product,
        quantity: items[index].quantity + quantity,
      };
    }
    dispatch(
      updateState({
        isLoading: false,
        items,
      })
    );
    dispatch(showAlert("Product added to cart!"));
  };

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsQty = createSelector(
  [(state) => state.cart.items],
  (items) => items.length
);

export default cartSlice.reducer;

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};

export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);
