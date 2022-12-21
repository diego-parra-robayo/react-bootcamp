import styled from "styled-components";
import {
  colorControlActive,
  colorControlHover,
  colorPrimary,
  colorPrimaryActive,
  colorPrimaryHover,
} from "../theme/colors";

export const Button = styled.button`
  opacity: 1;
  cursor: pointer;
  &:disabled {
    opacity: 0.75;
    cursor: default;
  }
`;

export const OutlinedButton = styled(Button)`
  border: thin solid gray;
  border-radius: 100px;
  background: transparent;
  padding: 0.5rem 1rem;

  &:hover:enabled {
    background: ${colorControlHover};
  }

  &:active:enabled {
    background: ${colorControlActive};
  }
`;

export const FilledButton = styled(Button)`
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: ${colorPrimary};

  &:hover:enabled {
    background: ${colorPrimaryHover};
  }

  &:active:enabled {
    background: ${colorPrimaryActive};
  }
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${({ selected }) => (selected ? colorPrimary : "#000000")};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  text-decoration: underline;
  font-size: 1rem;
  border: none;
`;
