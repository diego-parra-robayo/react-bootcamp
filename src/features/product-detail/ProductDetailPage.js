import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetailStarted,
  selectProductDetailIsLoading,
  selectProductDetailProduct,
} from "./productDetailSlice";
import styled from "styled-components";
import Spinner from "../../ui/base-components/Spinner";
import Gallery from "./Gallery";
import AddProductForm from "./AddProductForm";

const ProductDetailContainer = styled.div`
  display: flex;
  div:first-child {
    flex: 5;
    margin: 0 2rem 0 0;
  }
  div:last-child {
    flex: 5;
    div,
    ul,
    p {
      margin: 2rem 0;
    }
    input {
      margin: 0 1rem;
      width: 3rem;
      padding: 0.2rem;
    }
  }
`;

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectProductDetailIsLoading);
  const product = useSelector(selectProductDetailProduct);
  useEffect(() => {
    if (id) dispatch(productDetailStarted(id));
  }, [id]);

  if (isLoading || !product?.id || !product.data) return <Spinner />;
  return (
    <ProductDetailContainer>
      <div>
        <Gallery images={product.data.images} />
      </div>
      <div>
        <h1>{product.data.name}</h1>
        <h3>$ {product.data.price}</h3>
        <div>Sku: {product.data.sku}</div>
        <div>Category: {product.data.category.slug}</div>
        <div>Tags</div>
        <ul>
          {product.tags?.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p>{product.data.description[0].text}</p>
        <AddProductForm />
        <div>Specs:</div>
        <ul>
          {product.data.specs?.map((spec) => (
            <li key={spec.spec_name}>
              {spec.spec_name}: {spec.spec_value}
            </li>
          ))}
        </ul>
      </div>
    </ProductDetailContainer>
  );
}

export default ProductDetailPage;
