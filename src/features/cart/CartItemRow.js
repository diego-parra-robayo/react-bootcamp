import ItemQuantityControl from "./ItemQuantityControl";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";
import { red } from "../../ui/theme/colors";
import {
  cartDeleteProduct,
  cartAddProductQuantity,
  cartRemoveProductQuantity,
} from "../../redux/cart/thunks/index";

const StyledRow = styled.tr`
  border-bottom: 1px solid;
  align-items: center;

  td {
    padding: 0 2rem;
    text-align: center;
  }
  td:nth-child(3) {
    text-align: start;
  }
  td:nth-child(1) {
    padding: 0;
  }
  td:last-child {
    text-align: end;
    padding: 0 1rem;
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
        <MaterialIconButton
          iconName={"delete"}
          color={red}
          onClick={() => dispatch(cartDeleteProduct(product))}
        />
      </td>
      <td>
        <img
          src={product.data.mainimage.url}
          alt={product.data.mainimage.alt}
        />
      </td>
      <td>
        <h3>{product.data.name}</h3>
        <h5>
          SKU: {product.data.sku}
          <br />
          Price: ${product.data.price} / unit
        </h5>
      </td>
      <td>
        <ItemQuantityControl
          quantity={quantity}
          maxStock={product.data.stock}
          onAddPressed={() => dispatch(cartAddProductQuantity(product))}
          onRemovePressed={() => dispatch(cartRemoveProductQuantity(product))}
        />
      </td>
      <td>$ {product.data.price * quantity}</td>
    </StyledRow>
  );
}

export default CartItemRow;
