import { getProduct } from "../../../data/productsApi";
import { updateState } from "../productDetailSlice";

const productDetailStarted = (productId) => async (dispatch) => {
  dispatch(updateState({ isLoading: true }));
  try {
    const product = await getProduct(productId);
    dispatch(updateState({ isLoading: false, product: product.results[0] }));
  } catch (err) {
    dispatch(updateState({ isLoading: false, error: err }));
    console.error(err);
  }
};

export default productDetailStarted;
