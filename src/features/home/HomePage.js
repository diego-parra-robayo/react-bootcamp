import FeaturedBanners from "../banner/FeaturedBanners";
import Spacer from "../../components/Spacer";
import ProductList from "../products/ProductList";
import ViewAllProductsButton from "./ViewAllProductsButton";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../products/productsSlice";
import { useEffect } from "react";
import { loadFeaturedProducts } from "../products/productsThunks";
import CategoriesSection from "./CategoriesSection";

function HomePage() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFeaturedProducts());
  }, []);

  return (
    <section>
      <FeaturedBanners />
      <Spacer height="4rem" />
      <CategoriesSection />
      <Spacer height="4rem" />
      <ProductList title="Products for you" products={products} />
      <Spacer height="4rem" />
      <ViewAllProductsButton />
    </section>
  );
}

export default HomePage;
