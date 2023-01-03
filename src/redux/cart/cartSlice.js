import { createSlice } from "@reduxjs/toolkit";
import { showAlert } from "../appSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { selectCartItems, selectItemById } from "./cartSelectors";

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

export const cartUpdateQty = (product, quantity) => (dispatch, getState) => {
  dispatch(updateState({ isLoading: true }));
  const items = [...selectCartItems(getState())];
  const index = items.findIndex((item) => item.product.id === product.id);
  if (index === -1) {
    items.push({
      product,
      quantity: typeof quantity === "function" ? quantity(0) : quantity,
    });
  } else {
    items[index] = {
      product: items[index].product,
      quantity:
        typeof quantity === "function"
          ? quantity(items[index].quantity)
          : quantity,
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
    if (showAddedMessage)
      dispatch(showAlert(`${product.data.name} added to cart!`));
  };

export const cartRemoveProductQuantity =
  (product, quantity = 1) =>
  (dispatch, getState) => {
    const item = selectItemById(product.id)(getState());
    if (item != null) {
      if (item.quantity - quantity <= 0) {
        dispatch(cartDeleteProduct(item.product));
      } else {
        dispatch(cartUpdateQty(item.product, (current) => current - quantity));
      }
    }
  };

export const cartDeleteProduct =
  (product, { showDeletedMessage = true } = {}) =>
  (dispatch, getState) => {
    dispatch(updateState({ isLoading: true }));
    const confirm = window.confirm(
      `Are you sure you want to delete ${product.data.name} from your cart?`
    );
    if (!confirm) return;
    const items = [...selectCartItems(getState())];
    const index = items.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      items.splice(index, 1);
      dispatch(
        updateState({
          isLoading: false,
          items,
        })
      );
      if (showDeletedMessage)
        dispatch(showAlert(`${product.data.name} deleted from cart`));
    } else {
      dispatch(updateState({ isLoading: false }));
    }
  };

export const cartClear = () => (dispatch) => {
  const confirm = window.confirm(
    `Are you sure you want to delete all items in your cart?`
  );
  if (!confirm) return;
  dispatch(updateState({ items: [] }));
};

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
