import { useEffect, useMemo, useState } from "react";
import routes from "../../utils/routes";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Search } from "@mui/icons-material";
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
} from "./styles";

function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");

  const [searchParams] = useSearchParams();
  const searchQuery = useMemo(() => searchParams.get("q"), [searchParams]);

  const navigate = useNavigate();
  const location = useLocation();

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
    <StyledSearchForm onSubmit={onSubmit}>
      <StyledSearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <StyledSearchButton type="submit">
        <Search />
      </StyledSearchButton>
    </StyledSearchForm>
  );
}

export default SearchBar;
