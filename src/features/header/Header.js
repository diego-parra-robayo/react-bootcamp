import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShoppingCartButton from "../../components/ShoppingCartButton/ShoppingCartButton";

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
      <ShoppingCartButton />
    </StyledHeader>
  );
}

export default Header;
