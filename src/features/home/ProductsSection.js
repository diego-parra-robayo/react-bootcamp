import { useSelector } from "react-redux";
import ProductList from "../../ui/components/ProductList";
import { selectHomeProducts } from "../../redux/home/homeSelectors";

function ProductsSection() {
  const products = useSelector(selectHomeProducts);
  return <ProductList title="Products for you" products={products} />;
}

export default ProductsSection;
