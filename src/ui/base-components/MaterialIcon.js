import styled from "styled-components";
import { Button } from "./Button";

const MaterialIcon = styled.span.attrs((props) => ({
  className: "material-symbols-outlined",
  children: props.iconName || "help",
}))``;

export const MaterialIconButton = styled(Button).attrs((props) => ({
  className: "material-symbols-outlined",
  children: props.iconName || "help",
}))`
  background: transparent;
  border: 0;
  color: ${({ color }) => (color ? color : "#000")};
`;

export default MaterialIcon;
