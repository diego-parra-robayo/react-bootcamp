import { useGetProductCategoriesQuery } from "../categories/categoriesSlice";
import Spinner from "../../components/Spinner";
import Categories from "../categories/Categories";
import { useNavigate } from "react-router-dom";
import ProductListPage from "../product-list/ProductListPage";

function CategoriesSection() {
  const { data: { results: categories } = {}, isLoading } =
    useGetProductCategoriesQuery();
  const navigate = useNavigate();
  const onCategorySelected = () => {
    navigate(ProductListPage.prototype.route);
  };

  if (isLoading) return <Spinner />;
  return (
    <Categories
      categories={categories}
      onCategorySelected={onCategorySelected}
    />
  );
}

export default CategoriesSection;
