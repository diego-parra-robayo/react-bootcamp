import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "@mui/icons-material";
import Center from "../../components/Center/Center";
import ProductList from "../../components/ProductList/ProductList";
import Spacer from "../../components/Spacer/Spacer";
import { selectHomeProducts } from "../../redux/home/homeSelectors";
import routes from "../../utils/routes";

const StyledLink = styled(Link)`
  &:link {
    color: black;
  }
`;

function ProductsSection() {
  const products = useSelector(selectHomeProducts);
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
