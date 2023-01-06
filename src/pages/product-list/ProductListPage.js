import CategoriesSidePanel from "./CategoriesSidePanel";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useMemo } from "react";
import ProductsSection from "./ProductsSection";
import { useSearchParams } from "react-router-dom";
import { selectProductsListIsLoading } from "../../redux/product-list/productListSelectors";
import {
  updateSelectedCategories,
  startProductsListPage,
} from "../../redux/product-list/productListThunks";

function ProductListPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const categories = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  useEffect(() => {
    dispatch(startProductsListPage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(updateSelectedCategories(categories));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const isLoading = useSelector(selectProductsListIsLoading);
  if (isLoading) return <Spinner />;
  return (
    <main>
      <CategoriesSidePanel />
      <ProductsSection />
    </main>
  );
}

export default ProductListPage;
