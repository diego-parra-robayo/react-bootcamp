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
import ProductDetailTagsSection from "./ProductDetailTagsSection";
import ProductDetailTitleSection from "./ProductDetailTitleSection";
import ProductDetailSpecsSection from "./ProductDetailSpecsSection";

const ProductDetailContainer = styled.div`
  display: flex;
  & > *:first-child {
    flex: 5;
    margin: 0 2rem 0 0;
  }
  & > *:last-child {
    flex: 5;
    div,
    p {
      margin: 1rem 0;
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
      <Gallery images={product.data.images} />
      <section>
        <ProductDetailTitleSection
          name={product.data.name}
          price={product.data.price}
        />
        <div>Sku: {product.data.sku}</div>
        <div>Category: {product.data.category.slug}</div>
        <ProductDetailTagsSection tags={product.tags} />
        <p>{product.data.description[0].text}</p>
        <AddProductForm />
        <ProductDetailSpecsSection specs={product.data.specs} />
      </section>
    </ProductDetailContainer>
  );
}

export default ProductDetailPage;
