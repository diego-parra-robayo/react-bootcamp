import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { OutlinedButton } from "../../components/Button/styles";
import { addProductQuantityInCart } from "../../redux/cart/cartThunks";
import {
  selectMaxStockAvailable,
  selectProductDetailProduct,
} from "../../redux/product-detail/productDetailSelectors";

const StyledForm = styled.form`
  padding: 2rem 0;
  input {
    margin: 0 1rem;
    width: 3rem;
    padding: 0.2rem;
  }
`;

const initialQty = 1;

function AddProductForm() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initialQty);
  const product = useSelector(selectProductDetailProduct);
  const maxStockAvailable = useSelector(selectMaxStockAvailable);

  useEffect(() => {
    if (quantity > maxStockAvailable) setQuantity(maxStockAvailable);
  }, [quantity, maxStockAvailable]);

  function setQuantitySafe(newValue) {
    if (newValue <= 0) {
      setQuantity(0);
    } else if (newValue > maxStockAvailable) {
      setQuantity(maxStockAvailable);
    } else {
      setQuantity(newValue);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      addProductQuantityInCart(product, quantity, { showAddedMessage: true })
    );
    setQuantitySafe(initialQty);
  }

  return (
    <StyledForm onSubmit={onSubmit}>
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
    </StyledForm>
  );
}

export default AddProductForm;
