import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  return (
    <>
      <h1>Product detail page</h1>
      <p>Product id: {id}</p>
    </>
  );
}

export default ProductDetailPage;
