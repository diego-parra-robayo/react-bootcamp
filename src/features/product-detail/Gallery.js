import Banner from "../../components/Banner/Banner";

function Gallery({ images }) {
  const mappedImages = images?.map((image) => ({
    id: image.image.url,
    src: image.image.url,
    alt: image.image.alt,
  }));
  return <Banner data={mappedImages} interval={4000} aspectRatio={696 / 900} />;
}

export default Gallery;
