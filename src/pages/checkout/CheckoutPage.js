import styled from "styled-components";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import Spacer from "../../components/Spacer/Spacer";

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
      <section>
        <h2>Delivery Details</h2>
        <Spacer height={"2rem"} />
        <DeliveryDetailsForm />
      </section>
      <section>
        <h2>Order Details</h2>
      </section>
    </StyledMain>
  );
}

export default CheckoutPage;
