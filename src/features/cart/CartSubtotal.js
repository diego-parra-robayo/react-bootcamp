import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "../../utils/routes";
import { selectCartTotal } from "../../redux/cart/selectors";
import { cartClear } from "../../redux/cart/thunks";
import colors from "../../resources/colors";
import { FilledButton } from "../../components/Button/styles";
import { Delete } from "../../../node_modules/@mui/icons-material/index";
import { IconButton } from "../../../node_modules/@mui/material/index";

const StyledRow = styled.tr`
  background-color: ${colors.colorControl};

  td {
    text-align: start;
    padding: 0.5rem 1rem;
  }

  td:first-child {
    text-align: start;
    padding: 0.5rem 0;
  }
  td:last-child {
    text-align: end;
    padding: 0.5rem 1rem;
  }
`;

function CartSubtotal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = useSelector(selectCartTotal);
  return (
    <>
      <StyledRow>
        <td>
          <IconButton onClick={() => dispatch(cartClear())} title="Clear cart">
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
      </StyledRow>
      <StyledRow>
        <td colSpan={5}>
          <FilledButton onClick={() => navigate(routes.checkout)}>
            Proceed to pay
          </FilledButton>
        </td>
      </StyledRow>
    </>
  );
}

export default CartSubtotal;
