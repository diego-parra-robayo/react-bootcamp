import { showAlert } from "../appSlice";
import { selectCartItemById, selectCartItems } from "./cartSelectors";
import { updateCartState } from "./cartSlice";

const updateCartQuantity = (product, quantity) => (dispatch, getState) => {
  dispatch(updateCartState({ isLoading: true }));
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
    updateCartState({
      isLoading: false,
      items,
    })
  );
};

export const addProductQuantityInCart =
  (product, quantity = 1, { showAddedMessage = false } = {}) =>
  (dispatch) => {
    const stock = product.data.stock ?? 0;
    dispatch(
      updateCartQuantity(product, (current) =>
        current + quantity < stock ? current + quantity : stock
      )
    );
    if (showAddedMessage)
      dispatch(showAlert(`${product.data.name} added to cart!`));
  };

export const removeProductQuantityInCart =
  (product, quantity = 1) =>
  (dispatch, getState) => {
    const item = selectCartItemById(product.id)(getState());
    if (item != null) {
      if (item.quantity - quantity <= 0) {
        dispatch(deleteProductFromCart(item.product));
      } else {
        dispatch(
          updateCartQuantity(item.product, (current) => current - quantity)
        );
      }
    }
  };

export const deleteProductFromCart =
  (product, { showDeletedMessage = true } = {}) =>
  (dispatch, getState) => {
    dispatch(updateCartState({ isLoading: true }));
    const confirm = window.confirm(
      `Are you sure you want to delete ${product.data.name} from your cart?`
    );
    if (!confirm) return;
    const items = [...selectCartItems(getState())];
    const index = items.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      items.splice(index, 1);
      dispatch(
        updateCartState({
          isLoading: false,
          items,
        })
      );
      if (showDeletedMessage)
        dispatch(showAlert(`${product.data.name} deleted from cart`));
    } else {
      dispatch(updateCartState({ isLoading: false }));
    }
  };

export const clearCart = () => (dispatch) => {
  const confirm = window.confirm(
    `Are you sure you want to delete all items in your cart?`
  );
  if (!confirm) return;
  dispatch(updateCartState({ items: [] }));
};
