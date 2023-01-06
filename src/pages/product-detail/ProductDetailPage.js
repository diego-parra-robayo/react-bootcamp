import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import AddProductForm from "./AddProductForm";
import {
  ProductDetailContainer,
  SpecsContainer,
  TagsContainer,
  TitleContainer,
} from "./styles";
import Banner from "../../components/Banner/Banner";
import {
  selectProductDetailIsLoading,
  selectProductDetailProduct,
} from "../../redux/product-detail/productDetailSelectors";
import { startProductDetailPage } from "../../redux/product-detail/productDetailThunks";

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectProductDetailIsLoading);
  const product = useSelector(selectProductDetailProduct);
  useEffect(() => {
    if (id) dispatch(startProductDetailPage(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading || !product?.id || !product.data) return <Spinner />;
  return (
    <ProductDetailContainer>
      <Gallery images={product.data.images} />
      <section>
        <Title name={product.data.name} price={product.data.price} />
        <Codes
          sku={product.data.sku}
          categorySlug={product.data.category.slug}
        />
        <Tags tags={product.tags} />
        <Description description={product.data.description[0].text} />
        <AddProductForm />
        <Specs specs={product.specs} />
      </section>
    </ProductDetailContainer>
  );
}

function Gallery({ images }) {
  const mappedImages = images?.map((image) => ({
    id: image.image.url,
    src: image.image.url,
    alt: image.image.alt,
  }));
  return <Banner data={mappedImages} interval={4000} aspectRatio={696 / 900} />;
}

function Title({ name, price }) {
  <TitleContainer>
    <h1>{name}</h1>
    <h3>$ {price}</h3>
    <hr />
  </TitleContainer>;
}

function Codes({ sku, categorySlug }) {
  return (
    <>
      <div>Sku: {sku}</div>
      <div>Category: {categorySlug}</div>
    </>
  );
}

function Tags({ tags }) {
  return (
    <TagsContainer>
      <div>Tags</div>
      <ul>
        {tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </TagsContainer>
  );
}

function Description({ description }) {
  return <p>{description}</p>;
}

function Specs({ specs }) {
  return (
    <SpecsContainer>
      <div>Specs:</div>
      <ul>
        {specs?.map((spec) => (
          <li key={spec.spec_name}>
            {spec.spec_name}: {spec.spec_value}
          </li>
        ))}
      </ul>
    </SpecsContainer>
  );
}

export default ProductDetailPage;
