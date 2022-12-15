import styled from "styled-components";
import { ChipGroup } from "../../utils/components/Chip";

const SidePanel = styled.aside`
  width: 20vw;
  border-right: thin gray solid;
  margin-right: 2rem;
  padding-right: 2rem;
  float: left;
  position: sticky;
  top: 0;
  height: 100%;
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
