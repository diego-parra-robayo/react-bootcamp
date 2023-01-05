import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const fadeInMovingAnimation = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 30px; opacity: 1; }
`;

export const fadeOutAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
