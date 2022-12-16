import styled from "styled-components";
import Center from "../../components/Center";
import { Link } from "react-router-dom";
import ProductListPage from "../product-list/ProductListPage";

const StyledLink = styled(Link)`
  &:link {
    color: black;
  }
`;

function ViewAllProductsButton() {
  return (
    <Center>
      <StyledLink to={ProductListPage.prototype.route}>
        View all products
      </StyledLink>
    </Center>
  );
}

export default ViewAllProductsButton;
