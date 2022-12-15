import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../utils/components/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Link } from "react-router-dom";
import HomePage from "../home/HomePage";

const StyledHeader = styled.header`
  height: 8vmin;
  padding: 8px 0;
  margin-bottom: 8px;
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
      <StyledLinkContainer to={HomePage.prototype.route}>
        <Logo />
      </StyledLinkContainer>
      <SearchBar />
      <ShoppingCartIcon />
    </StyledHeader>
  );
}

export default Header;
