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

const selectItem = (state, productId) => {
  const items = [...selectCartItems(state)];
  const index = items.findIndex((item) => item.product.id === productId);
  if (index === -1) {
    return null;
  } else {
    return {
      ...items[index],
      index,
    };
  }
};

export const cartUpdateQty = (product, quantity) => (dispatch, getState) => {
  dispatch(updateState({ isLoading: true }));
  const items = [...selectCartItems(getState())];
  const index = items.findIndex((item) => item.product.id === product.id);
  if (index === -1) {
    const newQuantity = typeof quantity === "function" ? quantity(0) : quantity;
    items.push({ product, quantity: newQuantity });
  } else {
    const newQuantity =
      typeof quantity === "function"
        ? quantity(items[index].quantity)
        : quantity;
    items[index] = {
      product: items[index].product,
      quantity: newQuantity,
    };
  }
  dispatch(
    updateState({
      isLoading: false,
      items,
    })
  );
};

export const cartAddProductQuantity =
  (product, quantity = 1, { showAddedMessage = false } = {}) =>
  (dispatch) => {
    const stock = product.data.stock ?? 0;
    dispatch(
      cartUpdateQty(product, (current) =>
        current + quantity < stock ? current + quantity : stock
      )
    );
    if (showAddedMessage) dispatch(showAlert("Product added to cart!"));
  };

export const cartRemoveProductQuantity =
  (product, quantity = 1) =>
  (dispatch, getState) => {
    const item = selectItem(getState(), product.id);
    if (item != null) {
      if (item.quantity - quantity <= 0) {
        dispatch(cartDeleteItem(item));
      } else {
        dispatch(cartUpdateQty(item.product, (current) => current - quantity));
      }
    }
  };

export const cartDeleteItem = (item) => (dispatch, getState) => {
  dispatch(updateState({ isLoading: true }));
  const items = [...selectCartItems(getState())];
  const index = items.findIndex((it) => it.product.id === item.product.id);
  if (index !== -1) {
    items.splice(index, 1);
    dispatch(
      updateState({
        isLoading: false,
        items,
      })
    );
  } else {
    dispatch(updateState({ isLoading: false }));
  }
};

export const cartClear = () => (dispatch) => {
  dispatch(updateState({ items: [] }));
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
