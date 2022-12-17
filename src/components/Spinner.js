import styled, { keyframes } from "styled-components";
import { colorControl, colorPrimary } from "../utils/theme/colors";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

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
