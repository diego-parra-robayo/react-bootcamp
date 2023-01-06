import { getProductCategories } from "../../data/categoriesApi";
import { getProducts } from "../../data/productsApi";
import { updateProductListState } from "./productsListSlice";

export const startProductsListPage = () => async (dispatch) => {
  dispatch(loadCategories());
  dispatch(loadProducts());
};

const loadCategories = () => async (dispatch) => {
  dispatch(updateProductListState({ isLoading: true }));
  try {
    const categories = await getProductCategories();
    dispatch(
      updateProductListState({
        isLoading: false,
        categories: categories.results,
      })
    );
  } catch (err) {
    dispatch(updateProductListState({ isLoading: false, error: err }));
    console.error(err);
  }
};

const loadProducts =
  (page = 1) =>
  async (dispatch) => {
    dispatch(updateProductListState({ isLoading: true }));
    try {
      const products = await getProducts({ params: { page } });
      dispatch(
        updateProductListState({
          isLoading: false,
          products: products.results,
          page: products.page,
          totalPages: products.total_pages,
        })
      );
    } catch (err) {
      dispatch(updateProductListState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export const updateSelectedCategories =
  (categoriesIds = []) =>
  async (dispatch) => {
    dispatch(updateProductListState({ selectedCategoriesIds: categoriesIds }));
  };

export const updateProductListPage = (page) => (dispatch) =>
  dispatch(loadProducts(page));
