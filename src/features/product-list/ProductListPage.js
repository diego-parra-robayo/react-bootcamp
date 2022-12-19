import CategoriesSidePanel from "./CategoriesSidePanel";
import PaginationControls from "./PaginationControls";
import Spacer from "../../ui/base-components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCategories,
  loadProducts,
  selectProductsListIsLoading,
  selectProductsListPage,
  setCategories,
} from "./productsListSlice";
import Spinner from "../../ui/base-components/Spinner";
import { useEffect } from "react";
import ProductsSection from "./ProductsSection";
import { useSearchParams } from "react-router-dom";

function ProductListPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = useSelector(selectProductsListPage);
  useEffect(() => {
    dispatch(loadCategories());
  }, []);
  useEffect(() => {
    dispatch(setCategories(searchParams.getAll("category")));
  }, [searchParams]);
  useEffect(() => {
    dispatch(loadProducts(page));
  }, [page]);

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
