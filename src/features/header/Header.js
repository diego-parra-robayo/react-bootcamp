import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../ui/base-components/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../core/routes";
import { useSelector } from "react-redux";
import { selectCartItemsQty } from "../cart/cartSlice";

const StyledHeader = styled.header`
  height: 3rem;
  padding: 0.5rem 0;
  border-bottom: thin solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLinkContainer = styled(Link)`
  height: 100%;
`;

function Header() {
  const navigate = useNavigate();
  const cartItemsQty = useSelector(selectCartItemsQty);
  const onCartIconPressed = () => {
    navigate(routes.cart);
  };
  return (
    <StyledHeader>
      <StyledLinkContainer to={routes.home}>
        <Logo />
      </StyledLinkContainer>
      <SearchBar />
      <ShoppingCartIcon quantity={cartItemsQty} onClick={onCartIconPressed} />
    </StyledHeader>
  );
}

export default Header;
