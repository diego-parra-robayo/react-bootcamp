import { useMemo } from "react";
import Slideshow from "../../components/Slideshow";

/**
 *
 * @param {banners: *[bannerModel]}
 * @returns {JSX.Element}
 * @constructor
 */
function FeaturedBanners({ banners }) {
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

  return <Slideshow data={mappedData} interval={4000} />;
}

export default FeaturedBanners;
