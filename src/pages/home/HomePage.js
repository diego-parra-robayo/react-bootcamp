import Spacer from "../../components/Spacer/Spacer";
import CategoriesSection from "./CategoriesSection";
import BannersSection from "./BannersSection";
import ProductsSection from "./ProductsSection";

function HomePage() {
  return (
    <section>
      <BannersSection />
      <Spacer height="4rem" />
      <CategoriesSection />
      <Spacer height="4rem" />
      <ProductsSection />
    </section>
  );
}

export default HomePage;
