import { searchProductsRequest } from "../../data/productsApi";
import { selectSearchQuery } from "./searchSelectors";
import { updateSearchState } from "./searchSlice";

export const searchProducts =
  (query, page = 1) =>
  async (dispatch) => {
    dispatch(updateSearchState({ isLoading: true }));
    try {
      const results = await searchProductsRequest(query, { params: page });
      dispatch(
        updateSearchState({
          isLoading: false,
          products: results.results,
          page: results.page,
          totalPages: results.total_pages,
        })
      );
    } catch (err) {
      dispatch(updateSearchState({ isLoading: false, error: err }));
      console.error(err);
    }
  };

export const searchSetPage = (page) => async (dispatch, getState) =>
  searchProducts(selectSearchQuery(getState()), page);
