import { useDispatch, useSelector } from "react-redux";
import {
  cartAddProductQuantity,
  cartClear,
  cartRemoveProductQuantity,
  selectCartItems,
} from "./cartSlice";
import styled from "styled-components";
import { colorControl } from "../../ui/theme/colors";
import { TextButton } from "../../ui/base-components/Button";
import Center from "../../ui/base-components/Center";
import Spacer from "../../ui/base-components/Spacer";
import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: ${colorControl};
  }
  tr {
    border-bottom: 1px solid;
    align-items: center;
  }
  th,
  td {
    padding: 2rem;
    text-align: center;
  }

  th:not(:nth-child(2)) {
    width: 10%;
  }
  td:nth-child(2) {
    text-align: start;
  }
  img {
    width: 100%;
  }

  .quantity {
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .quantity span {
    margin: 1rem;
  }
`;

function CartPage() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  if (items.length === 0) return <p>No items added to cart yet</p>;
  return (
    <section>
      <StyledTable>
        <thead>
          <tr>
            <th />
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>
                <img
                  src={item.product.data.mainimage.url}
                  alt={item.product.data.mainimage.alt}
                />
              </td>
              <td>
                <h3>{item.product.data.name}</h3>
              </td>
              <td>
                <div className={"quantity"}>
                  <MaterialIconButton
                    iconName={item.quantity === 1 ? "delete" : "remove"}
                    onClick={() =>
                      dispatch(cartRemoveProductQuantity(item.product))
                    }
                  />
                  <span>{item.quantity}</span>
                  <MaterialIconButton
                    iconName={"add"}
                    onClick={() =>
                      dispatch(cartAddProductQuantity(item.product))
                    }
                  />
                </div>
              </td>
              <td>${item.product.data.price * item.quantity}</td>
            </tr>
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
