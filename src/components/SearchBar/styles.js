import styled from "styled-components";
import colors from "../../resources/colors";
import { Button } from "../Button/styles";

export const StyledSearchForm = styled.form`
  width: 50%;
  max-width: 700px;
  background: ${colors.colorControl};
  border-radius: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

export const StyledSearchInput = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  margin-right: 0.5rem;
`;

export const StyledSearchButton = styled(Button)`
  background: transparent;
  border: 0;
`;
