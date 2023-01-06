import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Banner from "../../components/Banner/Banner";
import { selectHomeBanners } from "../../redux/home/homeSelectors";

function BannersSection() {
  const banners = useSelector(
    createSelector(
      selectHomeBanners,
      (banners) =>
        banners?.map((banner) => ({
          id: banner.id,
          src: banner.data.main_image.url,
          alt: banner.data.main_image.alt,
        })) ?? []
    )
  );
  return <Banner data={banners} interval={4000} aspectRatio={1440 / 705} />;
}

export default BannersSection;
