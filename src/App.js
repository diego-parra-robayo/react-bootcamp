import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./features/product-list/ProductListPage";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    margin-bottom: 1rem;
  }

  main {
    display: flex;
  }

  section {
    padding: 1rem 0;
    flex-basis: auto;
    flex-grow: 8;
  }

  aside {
    min-width: 20vw;
    max-width: 20vw;
    margin-right: 2rem;
    flex-basis: 20vw;
    flex-grow: 2;
  }

  footer {
    margin-top: 1rem;
    clear: both;
  }
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
