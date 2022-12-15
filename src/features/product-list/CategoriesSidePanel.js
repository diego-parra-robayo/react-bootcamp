import styled from "styled-components";
import { ChipGroup } from "../../utils/components/Chip";

const SidePanel = styled.aside`
  border-right: thin gray solid;
  padding-right: 2rem;
`;

/**
 *
 * @param {categories: [{id: string, name: string, selected: boolean}], onCategorySelected: (function(category): void)}
 * @param onCategorySelected
 * @returns {JSX.Element}
 * @constructor
 */
function CategoriesSidePanel({ categories = [], onCategorySelected }) {
  return (
    <SidePanel>
      <h4>Categories</h4>
      <ChipGroup data={categories} onItemSelected={onCategorySelected} />
    </SidePanel>
  );
}

export default CategoriesSidePanel;
