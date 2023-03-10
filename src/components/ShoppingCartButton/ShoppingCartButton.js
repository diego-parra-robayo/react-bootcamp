import { useSelector } from "react-redux";
import styled from "styled-components";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { selectCartQuantity } from "../../redux/cart/cartSelectors";
import routes from "../../utils/routes";

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.1rem;
  cursor: pointer;
`;

const StyledBadge = styled.div`
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

function ShoppingCartButton() {
  const navigate = useNavigate();
  const cartItemsQty = useSelector(selectCartQuantity);
  return (
    <StyledContainer onClick={() => navigate(routes.cart)}>
      <ShoppingCart sx={{ padding: "0.25rem" }} />
      {cartItemsQty > 0 ? <StyledBadge>{cartItemsQty}</StyledBadge> : null}
    </StyledContainer>
  );
}

export default ShoppingCartButton;
