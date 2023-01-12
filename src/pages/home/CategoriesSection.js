import { createSearchParams, useNavigate } from "react-router-dom";
import { ChipGroup } from "../../components/Chip/ChipGroup";
import routes from "../../utils/routes";
import { useApiQuery } from "../../utils/hooks/useApiQuery";
import { getProductCategories } from "../../data/categoriesApi";
import { useMemo } from "react";

function CategoriesSection() {
  const { isLoading, data, error } = useApiQuery(getProductCategories);
  const categories = useMemo(
    () =>
      data?.results?.map((category) => ({
        id: category.id,
        name: category.data.name,
      })) ?? [],
    [data]
  );

  const navigate = useNavigate();
  const onCategorySelected = (category) => {
    navigate({
      pathname: routes.productsList,
      search: `?${createSearchParams({ category: category.id })}`,
    });
  };

  if (isLoading) return <span>Loading categories...</span>;
  if (error) return <span>Error loading categories: {error}</span>;
  return <ChipGroup data={categories} onItemSelected={onCategorySelected} />;
}

export default CategoriesSection;
