import styled from "styled-components";
import { ChipGroup } from "../../ui/base-components/Chip";
import { useSelector } from "react-redux";
import { selectProductsListCategories } from "./productsListSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useSearchParams } from "react-router-dom";
import ClearFiltersButton from "./ClearFiltersButton";
import Spacer from "../../ui/base-components/Spacer";

const SidePanel = styled.aside`
  border-right: thin gray solid;
  padding-right: 2rem;
`;

function CategoriesSidePanel() {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const onCategorySelected = (category) => {
    const categoryParams = [...searchParams.getAll("category")];
    const index = categoryParams.findIndex((id) => id === category.id);
    if (index === -1) {
      categoryParams.push(category.id);
    } else {
      categoryParams.splice(index, 1);
    }
    searchParams.delete("category");
    categoryParams.forEach((id) => searchParams.append("category", id));
    setSearchParams(searchParams);
  };

  return (
    <SidePanel>
      <h4>Categories</h4>
      <ChipGroup data={categories} onItemSelected={onCategorySelected} />
      <Spacer height={"2rem"} />
      <ClearFiltersButton />
      <Spacer height={"2rem"} />
    </SidePanel>
  );
}

export default CategoriesSidePanel;
