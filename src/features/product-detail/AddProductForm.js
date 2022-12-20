import { OutlinedButton } from "../../ui/base-components/Button";
import { cartAddProductQuantity } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectMaxStockAvailable,
  selectProductDetailProduct,
} from "./productDetailSlice";

const initialQty = 1;

function AddProductForm() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initialQty);
  const product = useSelector(selectProductDetailProduct);
  const maxStockAvailable = useSelector(selectMaxStockAvailable);

  function setQuantitySafe(newValue) {
    if (newValue <= 0) return;
    if (newValue > maxStockAvailable) {
      setQuantity(maxStockAvailable);
      return;
    }
    setQuantity(newValue);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      cartAddProductQuantity(product, quantity, { showAddedMessage: true })
    );
    setQuantitySafe(initialQty);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="qty">Items: </label>
      <input
        name="qty"
        type="number"
        value={quantity}
        onChange={(e) => setQuantitySafe(parseInt(e.target.value))}
      />
      <OutlinedButton type="submit" disabled={maxStockAvailable <= 0}>
        Add to cart
      </OutlinedButton>
    </form>
  );
}

export default AddProductForm;
