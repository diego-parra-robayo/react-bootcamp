import { getFeaturedBanners } from "../../../data/bannersApi";
import { getProductCategories } from "../../../data/categoriesApi";
import { getFeaturedProducts } from "../../../data/productsApi";
import { updateState } from "../homeSlice";

const homePageStarted = () => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const bannersResult = await getFeaturedBanners();
    const categoriesResult = await getProductCategories();
    const featuredProductsResult = await getFeaturedProducts();
    dispatch(
      updateState({
        isLoading: false,
        banners: bannersResult.results,
        categories: categoriesResult.results,
        products: featuredProductsResult.results,
      })
    );
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export default homePageStarted;
