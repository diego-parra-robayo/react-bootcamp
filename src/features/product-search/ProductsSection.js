import { useSelector } from "react-redux";
import { selectSearchResults } from "./searchSlice";
import ProductList from "../../ui/components/ProductList";

function ProductsSection() {
  const products = useSelector(selectSearchResults);
  if (products.length === 0)
    return <p>No products were found. Try another search</p>;
  return <ProductList products={products} />;
}

export default ProductsSection;
