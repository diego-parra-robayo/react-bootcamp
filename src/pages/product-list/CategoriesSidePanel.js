import { ChipGroup } from "../../components/Chip/ChipGroup";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useSearchParams } from "react-router-dom";
import Spacer from "../../components/Spacer/Spacer";
import { selectProductsListCategories } from "../../redux/product-list/selectors";
import Center from "../../components/Center/Center";
import { TextButtonUnderlined } from "../../components/Button/styles";

function CategoriesSidePanel() {
  return (
    <aside>
      <h4>Categories</h4>
      <Categories />
      <Spacer height={"2rem"} />
      <ClearFiltersButton />
      <Spacer height={"2rem"} />
    </aside>
  );
}

function Categories() {
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

  return <ChipGroup data={categories} onItemSelected={onCategorySelected} />;
}

function ClearFiltersButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onClearClick = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };
  const categories = searchParams.getAll("category");
  if (!categories || categories.length === 0) {
    return null;
  }
  return (
    <Center>
      <TextButtonUnderlined onClick={onClearClick}>
        Clear filters
      </TextButtonUnderlined>
    </Center>
  );
}

export default CategoriesSidePanel;
