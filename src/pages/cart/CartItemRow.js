import QuantityControl from "../../components/QuantityControl/QuantityControl";
import { useDispatch } from "react-redux";
import colors from "../../resources/colors";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { StyledRow } from "./styles";
import {
  addProductQuantityInCart,
  deleteProductFromCart,
  removeProductQuantityInCart,
} from "../../redux/cart/cartThunks";

function CartItemRow({ item: { product, quantity } }) {
  const dispatch = useDispatch();
  return (
    <StyledRow data-testid={`cart-item-row-${product.id}`}>
      <td>
        <IconButton
          title="remove from cart"
          onClick={() => dispatch(deleteProductFromCart(product))}
        >
          <Delete sx={{ color: colors.red }} />
        </IconButton>
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
        <QuantityControl
          quantity={quantity}
          maxStock={product.data.stock}
          onAddPressed={() => dispatch(addProductQuantityInCart(product))}
          onRemovePressed={() => dispatch(removeProductQuantityInCart(product))}
        />
      </td>
      <td>$ {product.data.price * quantity}</td>
    </StyledRow>
  );
}

export default CartItemRow;
