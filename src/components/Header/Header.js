import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton";
import Logo from "./Logo";

const StyledHeader = styled.header`
  height: 3rem;
  padding: 1rem 0;
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
      <ShoppingCartButton />
    </StyledHeader>
  );
}

export default Header;
