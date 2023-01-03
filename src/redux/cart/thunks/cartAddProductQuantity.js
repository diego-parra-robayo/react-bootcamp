import { showAlert } from "../../appSlice";
import cartUpdateQty from "./cartUpdateQty";

const cartAddProductQuantity =
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

export default cartAddProductQuantity;
