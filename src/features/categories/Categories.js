import { ChipGroup } from "../../components/Chip";

/**
 *
 * @param {
 *    categories: *[categoryModelWithSelectedProp],
 *    onCategorySelected: ({function(categoryModelWithSelectedProp):void})
 * }
 * @returns {JSX.Element}
 * @constructor
 */
function Categories({ categories, onCategorySelected }) {
  return (
    <section>
      <ChipGroup
        data={categories.map((category) => ({
          id: category.id,
          name: category.data.name,
          selected: category.selected ?? false,
        }))}
        onItemSelected={onCategorySelected}
      />
    </section>
  );
}

export default Categories;
