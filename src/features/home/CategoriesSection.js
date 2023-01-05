import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChipGroup } from "../../components/Chip/ChipGroup";
import { createSelector } from "@reduxjs/toolkit";
import routes from "../../utils/routes";
import { selectHomeCategories } from "../../redux/home/selectors";

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
      search: `?${createSearchParams({ category: category.id })}`,
    });
  };

  return <ChipGroup data={categories} onItemSelected={onCategorySelected} />;
}

export default CategoriesSection;
