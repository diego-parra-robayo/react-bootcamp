import styled from "styled-components";
import colors from "../../resources/colors";

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
    background: ${colors.colorControlHover};
  }

  &:active:enabled {
    background: ${colors.colorControlActive};
  }
`;

export const FilledButton = styled(Button)`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background: ${colors.colorPrimary};
  color: ${colors.colorOnPrimary};

  &:hover:enabled {
    background: ${colors.colorPrimaryHover};
  }

  &:active:enabled {
    background: ${colors.colorPrimaryActive};
  }
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${({ selected, color }) =>
    color ? color : selected ? colors.colorPrimary : "#000000"};
  cursor: ${({ selected, color }) =>
    color ? color : selected ? "default" : "pointer"};
  text-decoration: underline;
  font-size: 1rem;
  border: none;
`;
