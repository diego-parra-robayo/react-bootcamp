/*

Folder structure:
  components
  pages/views
  redux
  api
  hooks
  resources

Local storage:
  LocalStorage
  SessionStorage
  Cookies
  *useContext

index files:
  export { default as Componente } from './Componente'


*Custom Hooks:
export function useCartState() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return {
    cartItems: cartItems,
    itemsCount: cartItems.length,
    addProduct: (product, quantity = 1) => cartAddProductQuantity(product),
    removeProduct: (product, quantity = 1) =>
      cartRemoveProductQuantity(product),
    deleteProduct: (product) => cartRemoveProductQuantity(cartDeleteProduct),
  };
}

 */
