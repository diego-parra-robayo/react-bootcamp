import { getProductCategories } from "../../../data/categoriesApi";
import { updateState } from "../productsListSlice";

const loadCategories = () => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const categories = await getProductCategories();
    dispatch(updateState({ isLoading: false, categories: categories.results }));
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export default loadCategories;
