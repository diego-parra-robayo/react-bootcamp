import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/search/searchSlice";
import Spacer from "../../ui/base-components/Spacer";
import ProductsSection from "./ProductsSection";
import PaginationControlsSection from "./PaginationControlsSection";
import Spinner from "../../ui/base-components/Spinner";
import { selectSearchIsLoading } from "../../redux/search/searchSelectors";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = useMemo(() => searchParams.get("q"), [searchParams]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts(searchQuery));
  }, [searchQuery]);

  const isLoading = useSelector(selectSearchIsLoading);
  if (isLoading) return <Spinner />;
  return (
    <section>
      <ProductsSection />
      <Spacer height={"2rem"} />
      <PaginationControlsSection />
    </section>
  );
}

export default SearchPage;
