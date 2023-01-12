import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  BannerContainer,
  BannerControlNext,
  BannerControlPrev,
  BannerImage,
} from "./styles";
import { useBanner } from "./useBanner";

function Banner({ data = [], interval = 4000, aspectRatio }) {
  const {
    data: banner,
    setNext,
    setPrevious,
  } = useBanner({
    dataList: data,
    intervalMs: interval,
  });

  if (banner == null) return null;
  return (
    <section>
      <BannerContainer interval={interval} aspectRatio={aspectRatio}>
        <BannerControlPrev title="banner-back" onClick={setPrevious}>
          <ArrowBackIos />
        </BannerControlPrev>
        <BannerImage
          title="banner-img"
          key={banner.id}
          src={banner.src}
          alt={banner.alt}
        />
        <BannerControlNext title="banner-next" onClick={setNext}>
          <ArrowForwardIos />
        </BannerControlNext>
      </BannerContainer>
    </section>
  );
}

export default Banner;
