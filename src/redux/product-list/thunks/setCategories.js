import { updateState } from "../productsListSlice";

const setCategories =
  (categoriesIds = []) =>
  async (dispatch) => {
    dispatch(updateState({ selectedCategoriesIds: categoriesIds }));
  };

export default setCategories;
