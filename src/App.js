import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import ProductDetailPage from "./features/product-detail/ProductDetailPage";
import routes from "./core/routes";
import SearchPage from "./features/product-search/SearchPage";
import CartPage from "./features/cart/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { alertMessageShown, selectPopUpMessage } from "./redux/appSlice";
import { useEffect, useRef } from "react";
import Snackbar from "./ui/base-components/Snackbar";
import CheckoutPage from "./features/checkout/CheckoutPage";

function App() {
  const snackbarRef = useRef();
  const popUpMessage = useSelector(selectPopUpMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popUpMessage != null) {
      snackbarRef.current.show(popUpMessage);
      dispatch(alertMessageShown());
    }
  }, [popUpMessage]);
  return (
    <div className="app-container">
      <Header />
      <Routes>
        {[routes.home, "/home"].map((path) => (
          <Route key={path} path={path} element={<HomePage />} />
        ))}
        <Route path={routes.productsList} element={<ProductListPage />} />
        <Route
          path={routes.productDetail(":id")}
          element={<ProductDetailPage />}
        />
        <Route path={routes.search} element={<SearchPage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route path={routes.checkout} element={<CheckoutPage />} />
      </Routes>
      <Footer />
      <Snackbar ref={snackbarRef} />
    </div>
  );
}

export default App;
