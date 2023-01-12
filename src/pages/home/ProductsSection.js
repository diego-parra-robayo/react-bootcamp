import styled from "styled-components";
import { Link } from "@mui/icons-material";
import Center from "../../components/Center/Center";
import ProductList from "../../components/ProductList/ProductList";
import Spacer from "../../components/Spacer/Spacer";
import routes from "../../utils/routes";
import { useApiQuery } from "../../utils/hooks/useApiQuery";
import { getFeaturedProducts } from "../../data/productsApi";

const StyledLink = styled(Link)`
  &:link {
    color: black;
  }
`;

function ProductsSection() {
  const {
    isLoading,
    data: { results: products },
    error,
  } = useApiQuery(getFeaturedProducts);

  if (isLoading) return <span>Loading products...</span>;
  if (error) return <span>Error loading products: {error}</span>;
  return (
    <>
      <ProductList title="Products for you" products={products} />
      <Spacer height="4rem" />
      <Center>
        <StyledLink to={routes.productsList}>View all products</StyledLink>
      </Center>
    </>
  );
}

export default ProductsSection;
