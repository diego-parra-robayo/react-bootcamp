import { createSlice } from "@reduxjs/toolkit";
import { searchProductsRequest } from "../../data/productsApi";
import { selectSearchQuery } from "./searchSelectors";

const initialState = {
  isLoading: false,
  query: "",
  products: [],
  page: 1,
  totalPages: 1,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const { updateState } = searchSlice.actions;

export const searchProducts =
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

export const searchSetPage = (page) => async (dispatch, getState) =>
  searchProducts(selectSearchQuery(getState()), page);

export default searchSlice.reducer;
