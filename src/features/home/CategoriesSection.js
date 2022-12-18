import { useNavigate } from "react-router-dom";
import ProductListPage from "../product-list/ProductListPage";
import { useSelector } from "react-redux";
import { selectHomeCategories } from "./homeSlice";
import { ChipGroup } from "../../ui/base-components/Chip";
import { createSelector } from "@reduxjs/toolkit";

function CategoriesSection() {
  const categories = useSelector(
    createSelector(
      selectHomeCategories,
      (categories) =>
        categories?.map((category) => ({
          id: category.id,
          name: category.data.name,
        })) ?? []
    )
  );
  const navigate = useNavigate();
  const onCategorySelected = () => {
    navigate(ProductListPage.prototype.route);
  };

  return <ChipGroup data={categories} onItemSelected={onCategorySelected} />;
}

export default CategoriesSection;
