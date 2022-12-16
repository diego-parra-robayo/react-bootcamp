import CategoriesSidePanel from "./CategoriesSidePanel";
import mockedCategories from "../../mocks/en-us/product-categories.json";
import mockedProducts from "../../mocks/en-us/featured-products.json";
import useFilters from "../../utils/hooks/useFilters";
import ProductList from "../products/ProductList";
import { useMemo } from "react";
import PaginationControls from "./PaginationControls";
import Spacer from "../../components/Spacer";

function ProductListPage() {
  const {
    filters: categories,
    toggleFilter: toggleCategory,
    selectedFilters: selectedCategories,
  } = useFilters(
    mockedCategories.results.map((categoryModel) => ({
      ...categoryModel,
      id: categoryModel.id,
    }))
  );
  const filteredProducts = useMemo(
    () =>
      filterProductsByCategory(
        mockedProducts.results,
        selectedCategories.map((category) => category.id)
      ),
    [mockedProducts.results, selectedCategories]
  );

  return (
    <main>
      <CategoriesSidePanel
        categories={categories}
        onCategorySelected={(category) => toggleCategory(category.id)}
      />
      <section>
        <ProductList products={filteredProducts} />
        <Spacer height={"2rem"} />
        <PaginationControls
          pageFrom={filteredProducts.length === 0 ? 0 : 1}
          pageTo={5}
        />
      </section>
    </main>
  );
}

const filterProductsByCategory = (productList, categoryIds) => {
  if (!categoryIds || categoryIds.length === 0) return productList;
  return productList.filter((product) =>
    categoryIds.includes(product.data.category.id)
  );
};

export default ProductListPage;
