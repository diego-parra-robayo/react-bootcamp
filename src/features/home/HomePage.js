import Spacer from "../../ui/base-components/Spacer";
import ViewAllProductsButton from "./ViewAllProductsButton";
import { useEffect } from "react";
import CategoriesSection from "./CategoriesSection";
import { homePageStarted } from "../../redux/home/homeSlice";
import BannersSection from "./BannersSection";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/base-components/Spinner";
import ProductsSection from "./ProductsSection";
import { selectHomeIsLoading } from "../../redux/home/homeSelectors";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePageStarted());
  }, []);
  const isLoading = useSelector(selectHomeIsLoading);

  if (isLoading) return <Spinner />;
  return (
    <section>
      <BannersSection />
      <Spacer height="4rem" />
      <CategoriesSection />
      <Spacer height="4rem" />
      <ProductsSection />
      <Spacer height="4rem" />
      <ViewAllProductsButton />
    </section>
  );
}

export default HomePage;
