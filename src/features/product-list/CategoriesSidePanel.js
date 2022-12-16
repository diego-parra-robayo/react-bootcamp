import styled from "styled-components";
import Categories from "../categories/Categories";

const SidePanel = styled.aside`
  border-right: thin gray solid;
  padding-right: 2rem;
`;

/**
 *
 * @param {
 *    categories: [{id: string, name: string, selected: boolean}],
 *    onCategorySelected: (function(category): void)
 * }
 * @param onCategorySelected
 * @returns {JSX.Element}
 * @constructor
 */
function CategoriesSidePanel({ categories = [], onCategorySelected }) {
  return (
    <SidePanel>
      <h4>Categories</h4>
      <Categories
        categories={categories}
        onCategorySelected={onCategorySelected}
      />
    </SidePanel>
  );
}

export default CategoriesSidePanel;
