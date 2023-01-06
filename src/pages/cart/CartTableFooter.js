import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "../../utils/routes";
import colors from "../../resources/colors";
import { FilledButton } from "../../components/Button/styles";
import { Delete } from "../../../node_modules/@mui/icons-material/index";
import { IconButton } from "../../../node_modules/@mui/material/index";
import { StyledFooter } from "./styles";
import { selectCartTotal } from "../../redux/cart/cartSelectors";
import { clearCart } from "../../redux/cart/cartThunks";

function CartTableFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);
  return (
    <StyledFooter>
      <tr>
        <td>
          <IconButton onClick={() => dispatch(clearCart())} title="Clear cart">
            <Delete sx={{ color: colors.red }} />
          </IconButton>
        </td>
        <td />
        <td />
        <td>
          <h3>Subtotal</h3>
        </td>
        <td>
          <h3>$ {cartTotal}</h3>
        </td>
      </tr>
      <tr>
        <td colSpan={5}>
          <FilledButton onClick={() => navigate(routes.checkout)}>
            Proceed to pay
          </FilledButton>
        </td>
      </tr>
    </StyledFooter>
  );
}

export default CartTableFooter;
