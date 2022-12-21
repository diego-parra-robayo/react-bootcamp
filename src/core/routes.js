const routes = {
  home: "/",
  productsList: "/products",
  productDetail: (id) => `/product/${id}`,
  search: "/search",
  cart: "/cart",
  checkout: "/checkout",
};

export default routes;
