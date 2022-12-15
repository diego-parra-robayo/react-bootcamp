import CategoriesSidePanel from "./CategoriesSidePanel";
import styled from "styled-components";
import mockedCategories from "../../mocks/en-us/product-categories.json";
import useFilters from "../../utils/hooks/useFilters";

const ProductsListPageContainer = styled.main`
  display: flex;
  height: 100%;
  padding: 1rem 0;
`;

function ProductListPage() {
  const { filters: categories, toggleFilter: toggleCategory } = useFilters(
    mockedCategories.results.map((categoryModel) => ({
      ...categoryModel,
      id: categoryModel.id,
      name: categoryModel.data.name,
    }))
  );

  return (
    <ProductsListPageContainer>
      <CategoriesSidePanel
        categories={categories}
        onCategorySelected={(category) => toggleCategory(category.id)}
      />
      <main>
        <h4>This is the Products List Page</h4>
      </main>
    </ProductsListPageContainer>
  );
}

export default ProductListPage;
