import { useSelector } from "react-redux";
import { selectCartItems } from "./cartSlice";
import styled from "styled-components";
import Spacer from "../../ui/base-components/Spacer";
import CartItemRow from "./CartItemRow";
import CartItemHeader from "./CartItemHeader";
import CartSubtotal from "./CartSubtotal";

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

function CartPage() {
  const items = useSelector(selectCartItems);
  if (items.length === 0) return <p>No items added to cart yet</p>;
  return (
    <section>
      <StyledTable>
        <thead>
          <CartItemHeader />
        </thead>
        <tbody>
          {items.map((item) => (
            <CartItemRow key={item.product.id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <CartSubtotal />
        </tfoot>
      </StyledTable>
      <Spacer height={"2rem"} />
    </section>
  );
}

export default CartPage;
