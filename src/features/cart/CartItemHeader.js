import styled from "styled-components";
import { colorControl } from "../../ui/theme/colors";

const StyledHeader = styled.tr`
  background-color: ${colorControl};
  border-bottom: 1px solid;
  align-items: center;

  th {
    padding: 2rem;
    text-align: center;
  }

  th:not(:nth-child(2)) {
    width: 10%;
  }
`;

function CartItemHeader() {
  return (
    <StyledHeader>
      <th />
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </StyledHeader>
  );
}

export default CartItemHeader;
