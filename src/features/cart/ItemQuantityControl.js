import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";
import styled from "styled-components";

const QuantityContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  span {
    margin: 1rem;
  }
`;

function ItemQuantityControl({
  quantity,
  maxStock,
  onAddPressed,
  onRemovePressed,
}) {
  return (
    <QuantityContainer>
      <MaterialIconButton
        iconName={quantity === 1 ? "delete" : "remove"}
        onClick={onRemovePressed}
      />
      <span>{quantity}</span>
      <MaterialIconButton
        iconName={"add"}
        onClick={onAddPressed}
        disabled={maxStock ? quantity >= maxStock : false}
      />
    </QuantityContainer>
  );
}

export default ItemQuantityControl;
