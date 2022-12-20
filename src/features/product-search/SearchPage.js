import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "./searchSlice";
import Spacer from "../../ui/base-components/Spacer";
import ProductsSection from "./ProductsSection";
import PaginationControlsSection from "./PaginationControlsSection";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = useMemo(() => searchParams.get("q"), [searchParams]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts(searchQuery));
  }, [searchQuery]);

  return (
    <section>
      <ProductsSection />
      <Spacer height={"2rem"} />
      <PaginationControlsSection />
    </section>
  );
}

export default SearchPage;
