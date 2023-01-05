import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spacer from "../../components/Spacer/Spacer";
import ProductsSection from "./ProductsSection";
import PaginationControlsSection from "./PaginationControlsSection";
import Spinner from "../../components/Spinner/Spinner";
import { searchProducts } from "../../redux/search/thunks";
import selectSearchIsLoading from "../../redux/search/selectors/selectSearchIsLoading";

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
