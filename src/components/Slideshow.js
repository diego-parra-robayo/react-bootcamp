import { MaterialIconButton } from "./MaterialIcon";
import styled, { keyframes } from "styled-components";
import { useCallback, useEffect, useState } from "react";

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

/**
 *
 * @param {
 *    data: [{id: string, src: string, alt: string}],
 *    interval: number
 * }
 * @returns {JSX.Element|null}
 * @constructor
 */
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

/**
 *
 * @param {
 *    dataList: *[any],
 *    intervalMs: number,
 *    isInfinite: boolean
 * }
 * @returns {{pos: number, data: *, isFirst: boolean, isLast: boolean, setNext: (function(): void), setPrevious: (function(): void)}}
 */
export function useSlideshow({
  dataList = [],
  intervalMs = 4000,
  isInfinite = true,
}) {
  const [pos, setPos] = useState(0);
  const setNext = useCallback(
    () =>
      setPos((pos) => {
        const isLast = pos >= dataList.length - 1;
        if (isLast) {
          return isInfinite ? 0 : dataList.length - 1;
        } else {
          return pos + 1;
        }
      }),
    [setPos, dataList.length, isInfinite]
  );
  const setPrevious = useCallback(
    () =>
      setPos((pos) => {
        const isFirst = pos === 0;
        if (isFirst) {
          return isInfinite ? dataList.length - 1 : 0;
        } else {
          return pos - 1;
        }
      }),
    [setPos, dataList.length, isInfinite]
  );

  useEffect(() => {
    if (!dataList) return () => {};
    let interval = setInterval(setNext, intervalMs);
    return () => {
      clearInterval(interval);
    };
  }, [dataList, intervalMs, pos, setNext]);

  return {
    pos,
    data: dataList[pos],
    isFirst: pos === 0,
    isLast: pos === dataList.length - 1,
    setNext,
    setPrevious,
  };
}

export default Slideshow;
