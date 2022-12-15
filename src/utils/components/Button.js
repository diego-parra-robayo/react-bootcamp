import styled from "styled-components";

const Button = styled.button``;

export const OutlinedButton = styled(Button)`
  border: thin solid gray;
  border-radius: 100px;
  background: transparent;
  padding: 0.5rem 1rem;
`;

export const FilledButton = styled(Button)`
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: #031a71;
`;
