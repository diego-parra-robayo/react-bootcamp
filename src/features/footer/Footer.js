import styled from "styled-components";
import { primaryColor } from "../../utils/theme/colors";

const StyledFooter = styled.footer`
  background: ${primaryColor};
  padding: 8px;
  margin-top: 8px;

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
