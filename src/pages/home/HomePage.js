import Spacer from "../../components/Spacer/Spacer";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    </section>
  );
}

export default HomePage;
