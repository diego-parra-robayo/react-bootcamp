import styled from "styled-components";
import Center from "../../components/Center/Center";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

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
