import FeaturedBanners from "./FeaturedBanners";
import Categories from "../products/Categories";
import Spacer from "../../components/Spacer";
import ProductList from "../products/ProductList";
import ViewAllProductsButton from "./ViewAllProductsButton";
import mockedProducts from "../../mocks/en-us/featured-products.json";
import mockedCategories from "../../mocks/en-us/product-categories.json";
import mockedBanners from "../../mocks/en-us/featured-banners.json";

function HomePage() {
  return (
    <section>
      <FeaturedBanners banners={mockedBanners.results} />
      <Spacer height="4rem" />
      <Categories categories={mockedCategories.results} />
      <Spacer height="4rem" />
      <ProductList title="Products for you" products={mockedProducts.results} />
      <Spacer height="4rem" />
      <ViewAllProductsButton />
      <Spacer height="4rem" />
    </section>
  );
}

export default HomePage;
