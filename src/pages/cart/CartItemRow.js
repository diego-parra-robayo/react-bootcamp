import QuantityControl from "../../components/QuantityControl/QuantityControl";
import { useDispatch } from "react-redux";
import {
  cartDeleteProduct,
  cartAddProductQuantity,
  cartRemoveProductQuantity,
} from "../../redux/cart/thunks/index";
import colors from "../../resources/colors";
import { Delete } from "../../../node_modules/@mui/icons-material/index";
import { IconButton } from "../../../node_modules/@mui/material/index";
import { StyledRow } from "./styles";

function CartItemRow({ item: { product, quantity } }) {
  const dispatch = useDispatch();
  return (
    <StyledRow>
      <td>
        <IconButton onClick={() => dispatch(cartDeleteProduct(product))}>
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
          onAddPressed={() => dispatch(cartAddProductQuantity(product))}
          onRemovePressed={() => dispatch(cartRemoveProductQuantity(product))}
        />
      </td>
      <td>$ {product.data.price * quantity}</td>
    </StyledRow>
  );
}

export default CartItemRow;
