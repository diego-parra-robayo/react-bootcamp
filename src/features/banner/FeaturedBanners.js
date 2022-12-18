import { useMemo } from "react";
import Slideshow from "../../components/Slideshow";
import { createSelector } from "@reduxjs/toolkit";
import { useGetFeaturedBannersQuery } from "../api/rtk/bannersSlice";
import Spinner from "../../components/Spinner";

function FeaturedBanners() {
  const selectMappedBanners = useMemo(
    () =>
      createSelector(
        (res) => res.data?.results ?? [],
        (banners) =>
          banners?.map((banner) => ({
            id: banner.id,
            src: banner.data.main_image.url,
            alt: banner.data.main_image.alt,
          })) ?? []
      ),
    []
  );
  const { mappedBanners, isLoading } = useGetFeaturedBannersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      mappedBanners: selectMappedBanners(result),
    }),
  });

  if (isLoading) return <Spinner />;
  return <Slideshow data={mappedBanners} interval={4000} />;
}

export default FeaturedBanners;
