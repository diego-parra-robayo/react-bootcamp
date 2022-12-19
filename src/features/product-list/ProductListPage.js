import CategoriesSidePanel from "./CategoriesSidePanel";
import PaginationControls from "./PaginationControls";
import Spacer from "../../ui/base-components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  loadProducts,
  selectProductsListIsLoading,
  setCategories,
} from "./productsListSlice";
import Spinner from "../../ui/base-components/Spinner";
import { useEffect } from "react";
import ProductsSection from "./ProductsSection";
import { useSearchParams } from "react-router-dom";

function ProductListPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadProducts());
  }, []);
  useEffect(() => {
    dispatch(setCategories(searchParams.getAll("category")));
  }, [searchParams]);

  const isLoading = useSelector(selectProductsListIsLoading);
  if (isLoading) return <Spinner />;
  return (
    <main>
      <CategoriesSidePanel />
      <section>
        <ProductsSection />
        <Spacer height={"2rem"} />
        <PaginationControls />
      </section>
    </main>
  );
}

export default ProductListPage;
