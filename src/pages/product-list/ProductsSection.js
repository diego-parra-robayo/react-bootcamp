import { useDispatch, useSelector } from "react-redux";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import ProductList from "../../components/ProductList/ProductList";
import Spacer from "../../components/Spacer/Spacer";
import { selectProductsListFilteredProds } from "../../redux/product-list/selectors";
import selectProductsListPage from "../../redux/product-list/selectors/selectProductsListPage";
import selectProductsListTotalPages from "../../redux/product-list/selectors/selectProductsListTotalPages";
import setPage from "../../redux/product-list/thunks/setPage";

function ProductsSection() {
  const products = useSelector(selectProductsListFilteredProds);
  const page = useSelector(selectProductsListPage);
  const totalPages = useSelector(selectProductsListTotalPages);
  const dispatch = useDispatch();

  return (
    <section>
      <ProductList products={products} />
      <Spacer height={"2rem"} />
      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPageClick={(page) => dispatch(setPage(page))}
      />
    </section>
  );
}

export default ProductsSection;
