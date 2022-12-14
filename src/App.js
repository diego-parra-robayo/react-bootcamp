import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import Content from "./features/content/Content";
function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
