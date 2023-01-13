import styled from "styled-components";
import { Add, Delete, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const QuantityContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const QuantitySpan = styled.span`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: #dadada solid 1px;
  border-radius: 5px;
`;

function QuantityControl({
  quantity,
  maxStock,
  onAddPressed,
  onRemovePressed,
}) {
  return (
    <QuantityContainer>
      <IconButton title="Remove quantity" onClick={onRemovePressed}>
        {quantity === 1 ? <Delete /> : <Remove />}
      </IconButton>
      <QuantitySpan title="Quantity label">{quantity}</QuantitySpan>
      <IconButton
        title="Add quantity"
        onClick={onAddPressed}
        disabled={maxStock ? quantity >= maxStock : false}
      >
        <Add />
      </IconButton>
    </QuantityContainer>
  );
}

export default QuantityControl;
