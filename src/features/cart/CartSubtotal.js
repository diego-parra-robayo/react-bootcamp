import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../../redux/cart/cartSlice";
import { colorControl, red } from "../../ui/theme/colors";
import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";
import { FilledButton } from "../../ui/base-components/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../core/routes";
import { selectCartTotal } from "../../redux/cart/cartSelectors";

const StyledRow = styled.tr`
  background-color: ${colorControl};

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
          <MaterialIconButton
            iconName={"delete"}
            title="Empty cart"
            color={red}
            onClick={() => dispatch(cartClear())}
          />
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
