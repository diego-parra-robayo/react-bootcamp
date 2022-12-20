import styled from "styled-components";
import { colorControl, colorPrimary } from "../theme/colors";
import spinAnimation from "../animations/spinAnimation";

const Spinner = styled.div`
  margin: auto;
  border: 0.5rem solid ${colorControl};
  border-top: 0.5rem solid ${colorPrimary};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: ${spinAnimation} 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
`;

export default Spinner;
