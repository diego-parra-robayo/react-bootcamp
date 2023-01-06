import { getProduct } from "../../data/productsApi";
import { updateProductDetailState } from "./productDetailSlice";

export const startProductDetailPage = (productId) => async (dispatch) => {
  dispatch(updateProductDetailState({ isLoading: true }));
  try {
    const product = await getProduct(productId);
    dispatch(
      updateProductDetailState({
        isLoading: false,
        product: product.results[0],
      })
    );
  } catch (err) {
    dispatch(updateProductDetailState({ isLoading: false, error: err }));
    console.error(err);
  }
};
