import loadCategories from "./loadCategories";
import loadProducts from "./loadProducts";

const productListStarted = () => async (dispatch) => {
  dispatch(loadCategories());
  dispatch(loadProducts());
};

export default productListStarted;
