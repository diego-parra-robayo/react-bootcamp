import { useDispatch, useSelector } from "react-redux";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import ProductList from "../../components/ProductList/ProductList";
import Spacer from "../../components/Spacer/Spacer";
import {
  selectProductsListFilteredProds,
  selectProductsListPage,
  selectProductsListTotalPages,
} from "../../redux/product-list/productListSelectors";
import { updateProductListPage } from "../../redux/product-list/productListThunks";

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
        onPageClick={(page) => dispatch(updateProductListPage(page))}
      />
    </section>
  );
}

export default ProductsSection;
