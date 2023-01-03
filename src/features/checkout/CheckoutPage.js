import DeliveryDetailsSection from "./DeliveryDetailsSection";
import OrderDetailsSection from "./OrderDetailsSection";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  margin: 1rem 0;
  section:first-child {
    flex: 4;
    margin: 0 2rem 0 0;
    border-right: thin gray solid;
  }
  section:last-child {
    flex: 6;
  }
`;

function CheckoutPage() {
  return (
    <StyledMain>
      <DeliveryDetailsSection />
      <OrderDetailsSection />
    </StyledMain>
  );
}

export default CheckoutPage;
