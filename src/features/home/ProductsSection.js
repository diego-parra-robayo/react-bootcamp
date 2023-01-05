import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { selectHomeProducts } from "../../redux/home/selectors";

function ProductsSection() {
  const products = useSelector(selectHomeProducts);
  return <ProductList title="Products for you" products={products} />;
}

export default ProductsSection;
