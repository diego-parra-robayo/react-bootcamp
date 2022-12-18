import CategoriesSidePanel from "./CategoriesSidePanel";
import PaginationControls from "./PaginationControls";
import Spacer from "../../ui/base-components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import {
  productsListPageStarted,
  selectProductsListIsLoading,
} from "./productsListSlice";
import Spinner from "../../ui/base-components/Spinner";
import { useEffect } from "react";
import ProductsSection from "./ProductsSection";

function ProductListPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsListPageStarted());
  }, []);
  const isLoading = useSelector(selectProductsListIsLoading);
  if (isLoading) return <Spinner />;
  return (
    <main>
      <CategoriesSidePanel />
      <section>
        <ProductsSection />
        <Spacer height={"2rem"} />
        <PaginationControls pageFrom={1} pageTo={5} />
      </section>
    </main>
  );
}

export default ProductListPage;
