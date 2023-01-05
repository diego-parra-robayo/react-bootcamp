import styled from "styled-components";
import colors from "../../resources/colors";

const Chip = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: ${(props) => (props.selected ? colors.colorPrimary : "#ececec")};
  color: ${(props) => (props.selected ? colors.colorOnPrimary : "#000000")};
  border-radius: 100px;
  font-weight: bold;
  user-select: none;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default Chip;
