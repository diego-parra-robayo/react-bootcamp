import DeliveryDetailsForm from "./DeliveryDetailsForm";
import Spacer from "../../components/Spacer/Spacer";
import OrderSummaryTable from "./OrderSummaryTable";
import { StyledMain } from "./styles";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <section>
        <h2>Order Details</h2>
        <Spacer height={"2rem"} />
        <OrderSummaryTable />
      </section>
      <section>
        <h2>Delivery Details</h2>
        <Spacer height={"2rem"} />
        <DeliveryDetailsForm
          onSubmit={(formData) => console.log("formData", formData)}
          onCancel={() => navigate(-1)}
        />
      </section>
    </StyledMain>
  );
}

export default CheckoutPage;
