import styled from "styled-components";
import { MaterialIconButton } from "./MaterialIcon";
import { colorControl } from "../theme/colors";
import { useState } from "react";

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

function SearchBar({ placeholder = "Search...", onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchValue);
  }
  return (
    <StyledSearchBarForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <MaterialIconButton type="submit" iconName="search" />
    </StyledSearchBarForm>
  );
}

export default SearchBar;
