import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/product-list/ProductListPage";
import ProductDetailPage from "./pages/product-detail/ProductDetailPage";
import routes from "./utils/routes";
import SearchPage from "./pages/product-search/SearchPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import SnackBar from "./components/SnackBar/SnackBar";

function App() {
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
      <SnackBar />
    </div>
  );
}

export default App;
