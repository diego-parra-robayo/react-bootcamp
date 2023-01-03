import { searchProducts } from "./index";
import selectSearchQuery from "../selectors/selectSearchQuery";

const searchSetPage = (page) => async (dispatch, getState) =>
  searchProducts(selectSearchQuery(getState()), page);

export default searchSetPage;
