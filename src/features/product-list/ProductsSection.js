import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { selectProductsListFilteredProds } from "../../redux/product-list/selectors";

function ProductsSection() {
  const products = useSelector(selectProductsListFilteredProds);
  return <ProductList products={products} />;
}

export default ProductsSection;
