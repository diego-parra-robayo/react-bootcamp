import DeliveryDetailsForm from "./DeliveryDetailsForm";
import Spacer from "../../components/Spacer/Spacer";

function DeliveryDetailsSection() {
  return (
    <section>
      <h2>Delivery Details</h2>
      <Spacer height={"2rem"} />
      <DeliveryDetailsForm />
    </section>
  );
}

export default DeliveryDetailsSection;
