import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spacer from "../../components/Spacer/Spacer";
import Spinner from "../../components/Spinner/Spinner";
import ProductList from "../../components/ProductList/ProductList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import {
  selectSearchIsLoading,
  selectSearchPage,
  selectSearchResults,
  selectSearchTotalPages,
} from "../../redux/search/searchSelectors";
import { searchProducts, searchSetPage } from "../../redux/search/searchThunks";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = useMemo(() => searchParams.get("q"), [searchParams]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProducts(searchQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const isLoading = useSelector(selectSearchIsLoading);
  const products = useSelector(selectSearchResults);
  const page = useSelector(selectSearchPage);
  const totalPages = useSelector(selectSearchTotalPages);

  if (isLoading) return <Spinner />;
  if (products.length === 0)
    return <p>No products were found. Try another search</p>;
  return (
    <section>
      <ProductList products={products} />
      <Spacer height={"2rem"} />
      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPageClick={(page) => dispatch(searchSetPage(page))}
      />
    </section>
  );
}

export default SearchPage;
