import featuredProds from "../../mocks/en-us/featured-products.json";
import mockedProducts from "../../mocks/en-us/products.json";
import {
  selectCategoriesIdsFilter,
  setFeaturedProductsResult,
  setFilterByCategoriesResult,
} from "./productsSlice";

export const filterProductsByCategories = (categoriesIds) => (dispatch) => {
  if (categoriesIds.length === 0) {
    dispatch(
      setFilterByCategoriesResult({
        categoriesIds: categoriesIds,
        products: mockedProducts.results,
      })
    );
    return;
  }
  const filteredProds = mockedProducts.results.filter((product) =>
    categoriesIds.includes(product.data.category.id)
  );
  dispatch(
    setFilterByCategoriesResult({
      categoriesIds: categoriesIds,
      products: filteredProds,
    })
  );
};

export const toggleCategoryFilter = (categoryId) => (dispatch, getState) => {
  const categoriesIds = [...selectCategoriesIdsFilter(getState())];
  const index = categoriesIds.findIndex((id) => id === categoryId);
  if (index === -1) {
    categoriesIds.push(categoryId);
  } else {
    categoriesIds.splice(index, 1);
  }
  dispatch(filterProductsByCategories(categoriesIds));
};

export const loadFeaturedProducts = () => (dispatch) => {
  dispatch(setFeaturedProductsResult(featuredProds.results));
};
