import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import { StyledTable } from "./styles";

function OrderSummaryTable() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItemRow
            name={item.product.data.name}
            numberOfItems={item.quantity}
            subtotal={item.product.data.price * item.quantity}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Total</td>
          <td>$ {total}</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
}

function CartItemRow({ name, numberOfItems, subtotal }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{numberOfItems}</td>
      <td>{subtotal}</td>
    </tr>
  );
}

export default OrderSummaryTable;
