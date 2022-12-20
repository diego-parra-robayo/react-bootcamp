import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import ProductDetailPage from "./features/product-detail/ProductDetailPage";
import routes from "./core/routes";
import SearchPage from "./features/product-search/SearchPage";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
