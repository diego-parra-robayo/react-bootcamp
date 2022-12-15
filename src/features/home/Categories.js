import mockedCategories from "../../mocks/en-us/product-categories.json";
import { ChipGroup } from "../../utils/components/Chip";

function Categories({ categories = mockedCategories.results }) {
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
