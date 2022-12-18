import { useSelector } from "react-redux";
import { selectHomeProducts } from "./homeSlice";
import ProductList from "../../ui/components/ProductList";

function ProductsSection() {
  const products = useSelector(selectHomeProducts);
  return <ProductList title="Products for you" products={products} />;
}

export default ProductsSection;
