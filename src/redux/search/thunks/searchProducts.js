import { searchProductsRequest } from "../../../data/productsApi";
import { updateState } from "../searchSlice";

const searchProducts =
  (query, page = 1) =>
  async (dispatch) => {
    dispatch(updateState({ isLoading: true }));
    try {
      const results = await searchProductsRequest(query, { params: page });
      dispatch(
        updateState({
          isLoading: false,
          products: results.results,
          page: results.page,
          totalPages: results.total_pages,
        })
      );
    } catch (err) {
      dispatch(updateState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export default searchProducts;
