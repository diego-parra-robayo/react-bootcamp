import mockedBanners from "../../mocks/en-us/featured-banners.json";
import { useMemo } from "react";
import Slideshow from "../../utils/components/Slideshow";

function FeaturedBanners({ banners = mockedBanners.results }) {
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

  return (
    <section>
      <Slideshow data={mappedData} interval={4000} />
    </section>
  );
}

export default FeaturedBanners;
