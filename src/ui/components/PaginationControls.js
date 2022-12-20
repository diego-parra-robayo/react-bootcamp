import styled from "styled-components";
import { colorPrimary } from "../theme/colors";
import { MaterialIconButton } from "../base-components/MaterialIcon";
import { range } from "../../core/utils/listUtils";

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

const PageNumberButton = styled.span`
  color: ${({ selected }) => (selected ? colorPrimary : "#000000")};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  text-decoration: underline;
`;

function PaginationControls({ page, totalPages, onPageClick }) {
  const safeOnPageClick = (p) => {
    if (p === page || page < 1 || page > totalPages) return;
    onPageClick(page);
  };
  if (page <= 0 || page > totalPages || totalPages <= 1) return null;
  return (
    <ControlsContainer>
      <MaterialIconButton
        iconName="arrow_back_ios"
        disabled={page === 1}
        onClick={() => safeOnPageClick(page - 1)}
      />
      {range(1, totalPages).map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          selected={pageNumber === page}
          onClick={() => safeOnPageClick(pageNumber)}
        >
          {pageNumber}
        </PageNumberButton>
      ))}
      <MaterialIconButton
        iconName="arrow_forward_ios"
        disabled={page === totalPages}
        onClick={() => safeOnPageClick(page + 1)}
      />
    </ControlsContainer>
  );
}

export default PaginationControls;
