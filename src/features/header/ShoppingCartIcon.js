import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";
import styled from "styled-components";

const IconBadgeContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.1rem;
  cursor: pointer;
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.5rem;
  padding: 0.25rem;
  color: white;
  text-align: center;
  border-radius: 100%;
`;

function ShoppingCartIcon({ quantity = 0, onClick = () => {} }) {
  return (
    <IconBadgeContainer onClick={onClick}>
      <MaterialIconButton iconName="shopping_cart" />
      {quantity > 0 ? <Badge>{quantity}</Badge> : null}
    </IconBadgeContainer>
  );
}

export default ShoppingCartIcon;
