import Spacer from "../../components/Spacer/Spacer";
import ViewAllProductsButton from "./ViewAllProductsButton";
import { useEffect } from "react";
import CategoriesSection from "./CategoriesSection";
import BannersSection from "./BannersSection";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import ProductsSection from "./ProductsSection";
import { selectHomeIsLoading } from "../../redux/home/selectors";
import { homePageStarted } from "../../redux/home/thunks";

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
