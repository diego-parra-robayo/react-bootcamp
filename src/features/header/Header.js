import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const StyledHeader = styled.header`
  height: 8vmin;
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: thin solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <ShoppingCartIcon />
    </StyledHeader>
  );
}

export default Header;
