import {
  ArrowBackIos,
  ArrowForwardIos,
} from "../../../node_modules/@mui/icons-material/index";
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
        <BannerControlPrev onClick={setPrevious}>
          <ArrowBackIos />
        </BannerControlPrev>
        <BannerImage key={banner.id} src={banner.src} alt={banner.alt} />
        <BannerControlNext className="next" onClick={setNext}>
          <ArrowForwardIos />
        </BannerControlNext>
      </BannerContainer>
    </section>
  );
}

export default Banner;
