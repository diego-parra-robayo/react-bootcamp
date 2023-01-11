import ProductListItem from "../ProductListItem/ProductListItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../utils/routes";

const StyledTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  justify-content: space-between;
  grid-gap: 3rem 1rem;
`;

function ProductList({ title = "", products = [] }) {
  return (
    <>
      <TitleSection title={title} />
      <ProductsSection products={products} />
    </>
  );
}

const TitleSection = ({ title = "" }) =>
  title ? <StyledTitle>{title}</StyledTitle> : null;

const ProductsSection = ({ products = [] }) => {
  const navigate = useNavigate();
  const navigateToProductDetail = (productId) =>
    navigate(routes.productDetail(productId));

  if (!products || products.length === 0) return <p>No products were found</p>;

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          id={product.id}
          imageUrl={product.data.mainimage.url}
          imageAlt={product.data.mainimage.alt}
          title={product.data.name}
          price={"$ " + product.data.price}
          onImageClick={navigateToProductDetail}
          onAddToCartButtonClick={navigateToProductDetail}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
