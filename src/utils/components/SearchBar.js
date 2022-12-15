import styled from "styled-components";
import { MaterialIconButton } from "./MaterialIcon";

const StyledSearchBarForm = styled.form`
  width: 50%;
  max-width: 700px;
  background: #f4f7f9;
  border-radius: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin: 8px;

  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    margin-right: 8px;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

function SearchBar({ placeholder = "Search..." }) {
  return (
    <StyledSearchBarForm>
      <input type="text" placeholder={placeholder} />
      <MaterialIconButton type="submit" iconName="search" />
    </StyledSearchBarForm>
  );
}

export default SearchBar;
