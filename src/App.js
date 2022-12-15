import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path={HomePage.prototype.route} element={<HomePage />} />
        <Route
          path={ProductListPage.prototype.route}
          element={<ProductListPage />}
        />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

HomePage.prototype.route = "/";
ProductListPage.prototype.route = "/product-list";

export default App;
