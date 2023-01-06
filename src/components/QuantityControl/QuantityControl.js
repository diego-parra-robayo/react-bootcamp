import styled from "styled-components";
import {
  Add,
  Delete,
  Remove,
} from "../../../node_modules/@mui/icons-material/index";
import { IconButton } from "../../../node_modules/@mui/material/index";

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
      <IconButton onClick={onRemovePressed}>
        {quantity === 1 ? <Delete /> : <Remove />}
      </IconButton>
      <QuantitySpan>{quantity}</QuantitySpan>
      <IconButton
        onClick={onAddPressed}
        disabled={maxStock ? quantity >= maxStock : false}
      >
        <Add />
      </IconButton>
    </QuantityContainer>
  );
}

export default QuantityControl;
