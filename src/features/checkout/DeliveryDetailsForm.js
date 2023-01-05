import styled from "styled-components";
import { useState } from "react";
import { FilledButton } from "../../components/Button/styles";

const StyledForm = styled.form`
  width: 90%;
  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 1rem;
  }
  label {
    width: 30%;
    margin-right: 1rem;
  }
  input,
  textarea {
    width: 70%;
    resize: none;
    padding: 0.4rem;
    border: lightgray solid thin;
    border-radius: 2px;
  }
  div:last-child {
    justify-content: center;
    margin: 2rem 0;
  }
`;

function DeliveryDetailsForm() {
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
    console.log("formData: ", formData);
  };

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
      <div>
        <FilledButton type="submit">Place Order</FilledButton>
      </div>
    </StyledForm>
  );
}

export default DeliveryDetailsForm;
