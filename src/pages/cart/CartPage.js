import { useSelector } from "react-redux";
import CartItemRow from "./CartItemRow";
import { StyledHeader, StyledTable } from "./styles";
import CartTableFooter from "./CartTableFooter";
import { selectCartItems } from "../../redux/cart/cartSelectors";

function CartPage() {
  const items = useSelector(selectCartItems);
  if (items.length === 0) return <p>No items added to cart yet</p>;
  return (
    <StyledTable>
      <StyledHeader>
        <tr>
          <th />
          <th />
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </StyledHeader>
      <tbody>
        {items.map((item) => (
          <CartItemRow key={item.product.id} item={item} />
        ))}
      </tbody>
      <CartTableFooter />
    </StyledTable>
  );
}

export default CartPage;
