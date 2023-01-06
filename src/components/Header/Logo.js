import logo from "../../resources/images/logo.png";
import styled from "styled-components";
import routes from "../../utils/routes";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledLinkContainer = styled(Link)`
  height: 100%;
`;

function Logo() {
  return (
    <StyledLinkContainer to={routes.home}>
      <StyledImage src={logo} alt="logo" />
    </StyledLinkContainer>
  );
}

export default Logo;
