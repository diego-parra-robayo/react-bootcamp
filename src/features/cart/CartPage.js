import { useDispatch, useSelector } from "react-redux";
import { cartClear, selectCartItems } from "./cartSlice";
import styled from "styled-components";
import { TextButton } from "../../ui/base-components/Button";
import Center from "../../ui/base-components/Center";
import Spacer from "../../ui/base-components/Spacer";
import CartItemRow from "./CartItemRow";
import CartItemHeader from "./CartItemHeader";

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

function CartPage() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
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
      </StyledTable>
      <Spacer height={"2rem"} />
      <Center>
        <TextButton onClick={() => dispatch(cartClear())}>
          Clear cart
        </TextButton>
      </Center>
    </section>
  );
}

export default CartPage;
