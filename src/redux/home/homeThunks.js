import { getFeaturedBanners } from "../../data/bannersApi";
import { getProductCategories } from "../../data/categoriesApi";
import { getFeaturedProducts } from "../../data/productsApi";
import { updateHomeState } from "./homeSlice";

export const startHomePage = () => async (dispatch) => {
  dispatch(updateHomeState({ isLoading: true }));
  try {
    const bannersResult = await getFeaturedBanners();
    const categoriesResult = await getProductCategories();
    const featuredProductsResult = await getFeaturedProducts();
    dispatch(
      updateHomeState({
        isLoading: false,
        banners: bannersResult.results,
        categories: categoriesResult.results,
        products: featuredProductsResult.results,
      })
    );
  } catch (err) {
    dispatch(updateHomeState({ isLoading: false, error: err }));
    console.error(err);
  }
};
