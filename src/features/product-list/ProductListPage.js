import CategoriesSidePanel from "./CategoriesSidePanel";
import PaginationControlsSection from "./PaginationControlsSection";
import Spacer from "../../ui/base-components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../ui/base-components/Spinner";
import { useEffect, useMemo } from "react";
import ProductsSection from "./ProductsSection";
import { useSearchParams } from "react-router-dom";
import {
  productListStarted,
  setCategories,
} from "../../redux/product-list/thunks";
import { selectProductsListIsLoading } from "../../redux/product-list/selectors";

function ProductListPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const categories = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  useEffect(() => {
    dispatch(productListStarted());
  }, []);
  useEffect(() => {
    dispatch(setCategories(categories));
  }, [categories]);

  const isLoading = useSelector(selectProductsListIsLoading);
  if (isLoading) return <Spinner />;
  return (
    <main>
      <CategoriesSidePanel />
      <section>
        <ProductsSection />
        <Spacer height={"2rem"} />
        <PaginationControlsSection />
      </section>
    </main>
  );
}

export default ProductListPage;
