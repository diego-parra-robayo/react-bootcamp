import Banner from "../../components/Banner/Banner";
import { useApiQuery } from "../../utils/hooks/useApiQuery";
import { getFeaturedBanners } from "../../data/bannersApi";
import { useMemo } from "react";
import Spinner from "../../components/Spinner/Spinner";

function BannersSection() {
  const { isLoading, data, error } = useApiQuery(getFeaturedBanners);
  const banners = useMemo(
    () =>
      data?.results?.map((banner) => ({
        id: banner.id,
        src: banner.data.main_image.url,
        alt: banner.data.main_image.alt,
      })) ?? [],
    [data]
  );
  if (isLoading) return <Spinner />;
  if (error) return <span>Error loading banners: {error}</span>;
  return <Banner data={banners} interval={4000} aspectRatio={1440 / 705} />;
}

export default BannersSection;
