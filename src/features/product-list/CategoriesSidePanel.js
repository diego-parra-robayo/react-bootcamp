import styled from "styled-components";
import { ChipGroup } from "../../ui/base-components/Chip";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsListCategories,
  toggleCategory,
} from "./productsListSlice";
import { createSelector } from "@reduxjs/toolkit";

const SidePanel = styled.aside`
  border-right: thin gray solid;
  padding-right: 2rem;
`;

function CategoriesSidePanel() {
  const categories = useSelector(
    createSelector(
      selectProductsListCategories,
      (categories) =>
        categories?.map((category) => ({
          id: category.id,
          name: category.data.name,
          selected: category.selected,
        })) ?? []
    )
  );
  const dispatch = useDispatch();
  const onCategorySelected = (category) => {
    console.log("category pressed", category);
    dispatch(toggleCategory(category.id));
  };
  return (
    <SidePanel>
      <h4>Categories</h4>
      <ChipGroup data={categories} onItemSelected={onCategorySelected} />
    </SidePanel>
  );
}

export default CategoriesSidePanel;
