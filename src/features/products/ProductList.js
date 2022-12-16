import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import Spacer from "../../components/Spacer";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem 1rem;
`;

/**
 *
 * @param {products: *[productModel]}
 * @returns {JSX.Element}
 * @constructor
 */
function ProductList({ title = "", products = [] }) {
  if (!products || products.length === 0) return <p>No products to show</p>;
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      {title ? <Spacer height={"1rem"} /> : null}
      <ProductListContainer>
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            imageUrl={product.data.mainimage.url}
            imageAlt={product.data.mainimage.alt}
            title={product.data.name}
            price={"$ " + product.data.price}
          />
        ))}
      </ProductListContainer>
    </section>
  );
}

export default ProductList;
