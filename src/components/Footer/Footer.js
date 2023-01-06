import styled from "styled-components";
import colors from "../../resources/colors";

const StyledFooter = styled.footer`
  background: ${colors.colorPrimary};
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
