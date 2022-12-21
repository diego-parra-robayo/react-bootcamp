import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../ui/base-components/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const StyledHeader = styled.header`
  height: 3rem;
  padding: 0.5rem 0;
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
