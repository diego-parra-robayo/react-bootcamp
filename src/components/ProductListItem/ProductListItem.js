import styled from "styled-components";
import { OutlinedButton } from "../Button/styles";

const Card = styled.div`
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

function ProductListItem({
  id,
  imageUrl,
  imageAlt,
  title,
  price,
  onImageClick,
  onAddToCartButtonClick,
}) {
  return (
    <Card data-testid={`prod-item-${id}`}>
      <img src={imageUrl} alt={imageAlt} onClick={() => onImageClick(id)} />
      <h3>{title}</h3>
      <h5>{price}</h5>
      <OutlinedButton onClick={() => onAddToCartButtonClick(id)}>
        Add to cart
      </OutlinedButton>
    </Card>
  );
}

export default ProductListItem;
