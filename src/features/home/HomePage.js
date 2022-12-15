import FeaturedBanners from "./FeaturedBanners";
import Categories from "./Categories";
import Spacer from "../../utils/components/Spacer";

function HomePage() {
  return (
    <main>
      <FeaturedBanners />
      <Spacer height="4rem" />
      <Categories />
      <Spacer height="4rem" />
    </main>
  );
}

export default HomePage;
