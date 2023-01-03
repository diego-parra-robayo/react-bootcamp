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
    updateState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateState } = searchSlice.actions;

export default searchSlice.reducer;
