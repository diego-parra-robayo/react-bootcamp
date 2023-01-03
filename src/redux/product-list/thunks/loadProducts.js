import { getProducts } from "../../../data/productsApi";
import { updateState } from "../productsListSlice";

const loadProducts =
  (page = 1) =>
  async (dispatch) => {
    dispatch(updateState({ isLoading: true }));
    try {
      const products = await getProducts({ params: { page } });
      dispatch(
        updateState({
          isLoading: false,
          products: products.results,
          page: products.page,
          totalPages: products.total_pages,
        })
      );
    } catch (err) {
      dispatch(updateState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export default loadProducts;
