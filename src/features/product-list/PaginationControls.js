import styled from "styled-components";
import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

function PaginationControls({ pageFrom = 1, pageTo = 5 }) {
  if (pageFrom === 0 || pageTo === 0 || pageTo < pageFrom) return null;
  return (
    <ControlsContainer>
      <MaterialIconButton iconName="arrow_back_ios" />
      {range(pageTo - pageFrom + 1, pageFrom).map((pageNumber) => (
        <a key={pageNumber} href="#">
          {pageNumber}
        </a>
      ))}
      <MaterialIconButton iconName="arrow_forward_ios" />
    </ControlsContainer>
  );
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

export default PaginationControls;
