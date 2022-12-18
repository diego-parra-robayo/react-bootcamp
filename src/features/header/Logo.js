import logo from "../../core/assets/logo.png";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
function Logo() {
  return <StyledImage src={logo} alt="logo" />;
}

export default Logo;
