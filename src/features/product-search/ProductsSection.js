import { useSelector } from "react-redux";
import { selectSearchIsLoading, selectSearchResults } from "./searchSlice";
import Spinner from "../../ui/base-components/Spinner";
import ProductList from "../../ui/components/ProductList";

function ProductsSection() {
  const isLoading = useSelector(selectSearchIsLoading);
  const products = useSelector(selectSearchResults);
  if (isLoading) return <Spinner />;
  if (products.length === 0)
    return <p>No products were found. Try another search</p>;
  return <ProductList products={products} />;
}

export default ProductsSection;
