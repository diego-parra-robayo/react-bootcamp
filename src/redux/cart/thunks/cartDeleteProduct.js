import selectCartItems from "../selectors/selectCartItems";
import { showAlert } from "../../appSlice";
import { updateState } from "../cartSlice";

const cartDeleteProduct =
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

export default cartDeleteProduct;
