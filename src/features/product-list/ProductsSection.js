import { useSelector } from "react-redux";
import { selectProductsListFilteredProds } from "./productsListSlice";
import ProductList from "../../ui/components/ProductList";

function ProductsSection() {
  const products = useSelector(selectProductsListFilteredProds);
  return <ProductList products={products} />;
}

export default ProductsSection;
