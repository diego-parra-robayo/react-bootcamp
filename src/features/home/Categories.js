import { ChipGroup } from "../../utils/components/Chip";

/**
 *
 * @param {categories: *[categoryModel]}
 * @returns {JSX.Element}
 * @constructor
 */
function Categories({ categories }) {
  return (
    <section>
      <ChipGroup
        data={categories.map((category) => ({
          id: category.id,
          name: category.data.name,
        }))}
      />
    </section>
  );
}

export default Categories;
