import styled from "styled-components";
import { MaterialIconButton } from "./MaterialIcon";
import { colorControl } from "../utils/theme/colors";

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
  return (
    <StyledSearchBarForm>
      <input type="text" placeholder={placeholder} />
      <MaterialIconButton type="submit" iconName="search" />
    </StyledSearchBarForm>
  );
}

export default SearchBar;
