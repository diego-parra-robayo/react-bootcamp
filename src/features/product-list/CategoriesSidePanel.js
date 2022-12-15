import styled from "styled-components";

const SidePanel = styled.aside`
  width: 20vw;
  border-right: thin gray solid;
  margin-right: 2rem;
`;

function CategoriesSidePanel() {
  return (
    <SidePanel>
      <h4>Categories</h4>
    </SidePanel>
  );
}

export default CategoriesSidePanel;
