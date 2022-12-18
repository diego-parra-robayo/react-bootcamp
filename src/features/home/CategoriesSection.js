import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHomeCategories } from "./homeSlice";
import { ChipGroup } from "../../ui/base-components/Chip";
import { createSelector } from "@reduxjs/toolkit";
import routes from "../../core/routes";

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
  const onCategorySelected = (category) => {
    navigate({
      pathname: routes.productsList,
      search: `?category=${category.id}`,
    });
  };

  return <ChipGroup data={categories} onItemSelected={onCategorySelected} />;
}

export default CategoriesSection;
