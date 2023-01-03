import loadProducts from "./loadProducts";

const setPage = (page) => (dispatch) => dispatch(loadProducts(page));

export default setPage;
