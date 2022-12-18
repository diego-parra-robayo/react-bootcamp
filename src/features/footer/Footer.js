import styled from "styled-components";
import { colorPrimary } from "../../ui/theme/colors";

const StyledFooter = styled.footer`
  background: ${colorPrimary};
  padding: 0.5rem;

  p {
    color: white;
    text-align: center;
    font-size: 0.75rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </StyledFooter>
  );
}

export default Footer;
