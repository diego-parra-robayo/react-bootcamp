import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import HomePage from "./features/home/HomePage";
function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
