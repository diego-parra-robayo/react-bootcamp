import { createSlice } from "@reduxjs/toolkit";

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
    updateSearchState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSearchState } = searchSlice.actions;

export default searchSlice.reducer;
