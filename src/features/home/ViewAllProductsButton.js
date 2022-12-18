import styled from "styled-components";
import Center from "../../ui/base-components/Center";
import { Link } from "react-router-dom";
import routes from "../../core/routes";

const StyledLink = styled(Link)`
  &:link {
    color: black;
  }
`;

function ViewAllProductsButton() {
  return (
    <Center>
      <StyledLink to={routes.productsList}>View all products</StyledLink>
    </Center>
  );
}

export default ViewAllProductsButton;
