import FeaturedBanners from "./FeaturedBanners";
import Categories from "./Categories";
import Spacer from "../../utils/components/Spacer";
import ProductList from "./ProductList";
import ViewAllProductsButton from "./ViewAllProductsButton";

function HomePage() {
  return (
    <main>
      <FeaturedBanners />
      <Spacer height="4rem" />
      <Categories />
      <Spacer height="4rem" />
      <ProductList />
      <Spacer height="4rem" />
      <ViewAllProductsButton />
      <Spacer height="4rem" />
    </main>
  );
}

export default HomePage;
