import styled from "styled-components";
import { OutlinedButton } from "../../utils/components/Button";

const Card = styled.div`
  width: 15rem;
  img {
    height: 15rem;
    object-fit: contain;
    border: thin solid #b9b9b9;
    border-radius: 2px;
    padding: 1.5rem;
  }
  h3,
  h5 {
    margin: 0.75rem;
  }
`;
function ProductListItem({ imageUrl, imageAlt, title, price }) {
  return (
    <Card>
      <img src={imageUrl} alt={imageAlt} />
      <h3>{title}</h3>
      <h5>{price}</h5>
      <OutlinedButton>Add to cart</OutlinedButton>
    </Card>
  );
}

export default ProductListItem;
