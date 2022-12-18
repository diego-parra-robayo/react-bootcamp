import styled from "styled-components";
import {
  colorControlActive,
  colorControlHover,
  colorPrimary,
  colorPrimaryActive,
  colorPrimaryHover,
} from "../theme/colors";

const Button = styled.button``;

export const OutlinedButton = styled(Button)`
  border: thin solid gray;
  border-radius: 100px;
  background: transparent;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${colorControlHover};
  }

  &:active {
    background: ${colorControlActive};
  }
`;

export const FilledButton = styled(Button)`
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: ${colorPrimary};

  &:hover {
    background: ${colorPrimaryHover};
  }

  &:active {
    background: ${colorPrimaryActive};
  }
`;
