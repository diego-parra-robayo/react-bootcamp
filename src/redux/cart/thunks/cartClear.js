import { updateState } from "../cartSlice";

const cartClear = () => (dispatch) => {
  const confirm = window.confirm(
    `Are you sure you want to delete all items in your cart?`
  );
  if (!confirm) return;
  dispatch(updateState({ items: [] }));
};

export default cartClear;
