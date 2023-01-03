import selectCartItems from "../selectors/selectCartItems";
import { updateState } from "../cartSlice";

const cartUpdateQty = (product, quantity) => (dispatch, getState) => {
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

export default cartUpdateQty;
