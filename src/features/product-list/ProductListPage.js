import CategoriesSidePanel from "./CategoriesSidePanel";
import styled from "styled-components";
import mockedCategories from "../../mocks/en-us/product-categories.json";
import mockedProducts from "../../mocks/en-us/featured-products.json";
import useFilters from "../../utils/hooks/useFilters";
import ProductList from "../../utils/components/ProductList";
import { useMemo } from "react";

const ProductsListPageContainer = styled.main`
  padding: 1rem 0;
  overflow: auto;
`;

function ProductListPage() {
  const {
    filters: categories,
    toggleFilter: toggleCategory,
    selectedFilters: selectedCategories,
  } = useFilters(
    mockedCategories.results.map((categoryModel) => ({
      ...categoryModel,
      id: categoryModel.id,
      name: categoryModel.data.name,
    }))
  );
  const selectedCategoryIds = useMemo(
    () => selectedCategories.map((category) => category.id),
    [selectedCategories]
  );

  return (
    <ProductsListPageContainer>
      <CategoriesSidePanel
        categories={categories}
        onCategorySelected={(category) => toggleCategory(category.id)}
      />
      <ProductList
        products={filterProductsByCategory(
          mockedProducts.results,
          selectedCategoryIds
        )}
      />
    </ProductsListPageContainer>
  );
}

const filterProductsByCategory = (productList, categoryIds) => {
  if (!categoryIds || categoryIds.length === 0) return productList;
  return productList.filter((product) =>
    categoryIds.includes(product.data.category.id)
  );
};

export default ProductListPage;
