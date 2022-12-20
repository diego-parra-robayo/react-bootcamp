import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "../../ui/base-components/SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const onSearch = (query) => {
    navigate({
      pathname: routes.search,
      search: `?${createSearchParams({ q: query })}`,
    });
  };
  return (
    <StyledHeader>
      <StyledLinkContainer to={routes.home}>
        <Logo />
      </StyledLinkContainer>
      <SearchBar onSearch={onSearch} />
      <ShoppingCartIcon />
    </StyledHeader>
  );
}

export default Header;
