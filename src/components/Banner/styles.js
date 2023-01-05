import styled from "styled-components";
import { fadeInAnimation } from "../../resources/animations";
import { Button } from "../Button/styles";

export const BannerContainer = styled.div`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio ?? 2};
  position: relative;
  background: transparent;
  border-radius: 2px;
  overflow: hidden;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  animation-name: ${fadeInAnimation};
  animation-duration: 2s;
`;

export const BannerControl = styled(Button)`
  position: absolute;
  height: 30%;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  border: 0;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 0.5rem;
`;

export const BannerControlPrev = styled(BannerControl)`
  left: 0;
`;

export const BannerControlNext = styled(BannerControl)`
  right: 0;
`;
