import mockedProducts from "../../mocks/en-us/featured-products.json";
import ProductListItem from "./ProductListItem";
import styled from "styled-components";
import Spacer from "../../utils/components/Spacer";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem 1rem;
`;

function ProductList({ products = mockedProducts.results }) {
  return (
    <section>
      <h2>Products for you</h2>
      <Spacer height={"1rem"} />
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
