import { useState } from "react";
import {
  FilledButton,
  FilledButtonSecondary,
} from "../../components/Button/styles";
import Spacer from "../../components/Spacer/Spacer";
import { StyledForm } from "./styles";

function DeliveryDetailsForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
    notes: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const handleCancel = () => onCancel();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name*</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email*: </label>
        <input
          name="email"
          type="email"
          placeholder="john.doe@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="zip">Post/Zip code*: </label>
        <input
          name="zip"
          type="number"
          placeholder="1111"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="notes">Notes: </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Delivery at the front desk"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <Spacer height={"1rem"} />
      <div>
        <FilledButtonSecondary type="button" onClick={handleCancel}>
          Go Back to cart
        </FilledButtonSecondary>
        <Spacer width={"1rem"} />
        <FilledButton type="submit">Place Order</FilledButton>
      </div>
    </StyledForm>
  );
}

export default DeliveryDetailsForm;
