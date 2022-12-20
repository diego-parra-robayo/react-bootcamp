import styled from "styled-components";
import { MaterialIconButton } from "./MaterialIcon";
import { colorControl } from "../theme/colors";
import { useEffect, useMemo, useState } from "react";
import routes from "../../core/routes";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const StyledSearchBarForm = styled.form`
  width: 50%;
  max-width: 700px;
  background: ${colorControl};
  border-radius: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin: 0.5rem;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    margin-right: 0.5rem;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = useMemo(() => searchParams.get("q"), [searchParams]);
  useEffect(() => {
    if (location.pathname !== routes.search || searchQuery == null) {
      setQuery("");
    }
  }, [location, searchQuery]);

  function onSubmit(e) {
    e.preventDefault();
    navigate({
      pathname: routes.search,
      search: `?${createSearchParams({ q: query })}`,
    });
  }

  return (
    <StyledSearchBarForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MaterialIconButton type="submit" iconName="search" />
    </StyledSearchBarForm>
  );
}

export default SearchBar;
