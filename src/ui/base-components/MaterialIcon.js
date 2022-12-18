import styled from "styled-components";

const MaterialIcon = styled.span.attrs((props) => ({
  className: "material-symbols-outlined",
  children: props.iconName || "help",
}))``;

export const MaterialIconButton = styled.button.attrs((props) => ({
  className: "material-symbols-outlined",
  children: props.iconName || "help",
}))`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export default MaterialIcon;
