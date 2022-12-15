import mockedBanners from "../../mocks/en-us/featured-banners.json";
import { MaterialIconButton } from "../header/MaterialIcon";
import { useMemo } from "react";
import { useBanner } from "../../utils/hooks/useBanner";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledContainer = styled.div`
  width: 100%;
  aspect-ratio: 1440/705;
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 1440/705;
    border-radius: 2px;
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

function FeaturedBanners({ banners = mockedBanners.results }) {
  let interval = 4000;
  const mappedData = useMemo(
    () =>
      !banners
        ? []
        : banners.map((banner) => ({
            id: banner.id,
            src: banner.data.main_image.url,
            alt: banner.data.main_image.alt,
          })),
    [banners]
  );
  const {
    data: banner,
    setNext,
    setPrevious,
  } = useBanner({
    dataList: mappedData,
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

export default FeaturedBanners;
