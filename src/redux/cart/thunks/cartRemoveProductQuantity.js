import selectItemById from "../selectors/selectItemById";
import cartUpdateQty from "./cartUpdateQty";
import cartDeleteProduct from "./cartDeleteProduct";

const cartRemoveProductQuantity =
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

export default cartRemoveProductQuantity;
