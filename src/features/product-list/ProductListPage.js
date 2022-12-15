import CategoriesSidePanel from "./CategoriesSidePanel";
import styled from "styled-components";

const ProductsListPageContainer = styled.main`
  display: flex;
  height: 100%;
  padding: 1rem 0;
`;

function ProductListPage() {
  return (
    <ProductsListPageContainer>
      <CategoriesSidePanel />
      <main>
        <h4>This is the Products List Page</h4>
      </main>
    </ProductsListPageContainer>
  );
}
export default ProductListPage;
