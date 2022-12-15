import { MaterialIconButton } from "./MaterialIcon";
import { useSlideshow } from "../hooks/useSlideshow";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledContainer = styled.div`
  width: 100%;
  aspect-ratio: 1440/705;
  position: relative;
  background: transparent;
  border-radius: 2px;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 1440/705;
    animation-name: ${fadeInAnimation};
    animation-duration: 2s;
  }

  .prev,
  .next {
    position: absolute;
    height: 30%;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 5px;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
`;

const StyledArrowButton = styled(MaterialIconButton)`
  background: rgba(0, 0, 0, 0.2);
  color: white;
`;

function Slideshow({ data = [], interval = 4000 }) {
  const {
    data: banner,
    setNext,
    setPrevious,
  } = useSlideshow({
    dataList: data,
    intervalMs: interval,
  });

  if (banner == null) return null;
  return (
    <section>
      <StyledContainer interval={interval}>
        <StyledArrowButton
          className="prev"
          iconName="arrow_back_ios"
          onClick={setPrevious}
        />
        <img key={banner.id} src={banner.src} alt={banner.alt} />
        <StyledArrowButton
          className="next"
          iconName="arrow_forward_ios"
          onClick={setNext}
        />
      </StyledContainer>
    </section>
  );
}

export default Slideshow;
