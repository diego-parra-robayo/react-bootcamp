import Slideshow from "../../ui/base-components/Slideshow";
import { useMemo } from "react";

function Gallery({ images }) {
  const mappedImages = useMemo(
    () =>
      images?.map((image) => ({
        id: image.image.url,
        src: image.image.url,
        alt: image.image.alt,
      })),
    []
  );
  return (
    <Slideshow data={mappedImages} interval={4000} aspectRatio={696 / 900} />
  );
}

export default Gallery;
