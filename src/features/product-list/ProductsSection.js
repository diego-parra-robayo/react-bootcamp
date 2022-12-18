import { useSelector } from "react-redux";
import { selectProductsListProducts } from "./productsListSlice";
import ProductList from "../../ui/components/ProductList";

function ProductsSection() {
  const products = useSelector(selectProductsListProducts);
  return <ProductList products={products} />;
}

export default ProductsSection;
