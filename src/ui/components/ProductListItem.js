import styled from "styled-components";
import { OutlinedButton } from "../base-components/Button";

const Card = styled.div`
  width: 15rem;
  img {
    height: 15rem;
    object-fit: contain;
    border: thin solid #b9b9b9;
    border-radius: 2px;
    padding: 1.5rem;
    cursor: pointer;
  }
  h3,
  h5 {
    margin: 0.75rem;
  }
`;
function ProductListItem({ id, imageUrl, imageAlt, title, price, onClick }) {
  return (
    <Card>
      <img src={imageUrl} alt={imageAlt} onClick={() => onClick(id)} />
      <h3>{title}</h3>
      <h5>{price}</h5>
      <OutlinedButton>Add to cart</OutlinedButton>
    </Card>
  );
}

export default ProductListItem;
