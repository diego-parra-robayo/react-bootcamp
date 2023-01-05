import styled from "styled-components";
import colors from "../../resources/colors";

const StyledHeader = styled.tr`
  background-color: ${colors.colorControl};
  border-bottom: 1px solid;
  align-items: center;

  th {
    padding: 2rem;
    text-align: center;
  }

  th:not(:nth-child(3)) {
    width: 8%;
  }

  th:nth-child(1) {
    padding: 0;
    width: 2%;
  }
`;

function CartItemHeader() {
  return (
    <StyledHeader>
      <th />
      <th />
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </StyledHeader>
  );
}

export default CartItemHeader;
