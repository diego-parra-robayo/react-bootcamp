import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import Spinner from "./components/Spinner";
import {
  selectBannersResult,
  useGetFeaturedBannersQuery,
} from "./features/api/rtk/bannersSlice";
import { useSelector } from "react-redux";

function App() {
  useGetFeaturedBannersQuery();
  const { data: banners, isLoading } = useSelector(selectBannersResult);
  console.log("banners", banners, "isLoading", isLoading);

  if (isLoading) return <Spinner />;
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path={HomePage.prototype.route} element={<HomePage />} />
        <Route
          path={ProductListPage.prototype.route}
          element={<ProductListPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

HomePage.prototype.route = "/";
ProductListPage.prototype.route = "/product-list";

export default App;
