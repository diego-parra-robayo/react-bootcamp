import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../ui/base-components/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Link } from "react-router-dom";
import routes from "../../core/routes";

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
  return (
    <StyledHeader>
      <StyledLinkContainer to={routes.home}>
        <Logo />
      </StyledLinkContainer>
      <SearchBar />
      <ShoppingCartIcon />
    </StyledHeader>
  );
}

export default Header;
