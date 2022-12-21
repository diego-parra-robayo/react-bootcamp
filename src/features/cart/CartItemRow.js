import ItemQuantityControl from "./ItemQuantityControl";
import { useDispatch } from "react-redux";
import { cartAddProductQuantity, cartRemoveProductQuantity } from "./cartSlice";
import styled from "styled-components";

const StyledRow = styled.tr`
  border-bottom: 1px solid;
  align-items: center;

  td {
    padding: 2rem;
    text-align: center;
  }
  td:nth-child(2) {
    text-align: start;
  }

  img {
    width: 100%;
  }
`;

function CartItemRow({ item: { product, quantity } }) {
  const dispatch = useDispatch();
  return (
    <StyledRow>
      <td>
        <img
          src={product.data.mainimage.url}
          alt={product.data.mainimage.alt}
        />
      </td>
      <td>
        <h3>{product.data.name}</h3>
      </td>
      <td>
        <ItemQuantityControl
          quantity={quantity}
          maxStock={product.data.stock}
          onAddPressed={() => dispatch(cartAddProductQuantity(product))}
          onRemovePressed={() => dispatch(cartRemoveProductQuantity(product))}
        />
      </td>
      <td>${product.data.price * quantity}</td>
    </StyledRow>
  );
}

export default CartItemRow;
