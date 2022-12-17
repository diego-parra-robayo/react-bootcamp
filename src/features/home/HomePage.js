import FeaturedBanners from "../banner/FeaturedBanners";
import Categories from "../categories/Categories";
import Spacer from "../../components/Spacer";
import ProductList from "../products/ProductList";
import ViewAllProductsButton from "./ViewAllProductsButton";
import { useDispatch, useSelector } from "react-redux";
import { selectBannersBasic } from "../api/axios/bannersSlice";
import { selectProducts } from "../products/productsSlice";
import { useEffect } from "react";
import { selectCategories } from "../categories/categoriesSlice";
import { loadFeaturedProducts } from "../products/productsThunks";

function HomePage() {
  const banners = useSelector(selectBannersBasic);
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFeaturedProducts());
  }, []);

  return (
    <section>
      <FeaturedBanners banners={banners} />
      <Spacer height="4rem" />
      <Categories categories={categories} />
      <Spacer height="4rem" />
      <ProductList title="Products for you" products={products} />
      <Spacer height="4rem" />
      <ViewAllProductsButton />
    </section>
  );
}

export default HomePage;
