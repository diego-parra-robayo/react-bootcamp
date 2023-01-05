import styled from "styled-components";
import {
  ArrowBackIos,
  ArrowForwardIos,
} from "../../../node_modules/@mui/icons-material/index";
import { range } from "../../utils/functions/listExtensions";
import colors from "../../resources/colors";
import { Button } from "../Button/styles";

const PaginationControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

const PaginationControl = styled(Button)`
  color: ${({ disabled, selected }) =>
    disabled ? null : selected ? colors.colorPrimary : "#000000"};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  background-color: transparent;
  border: 0;
  font-size: 1rem;
`;

const PageNumberButton = styled(PaginationControl)`
  text-decoration: underline;
`;

function PaginationControls({ page, totalPages, onPageClick }) {
  const safeOnPageClick = (p) => {
    if (p === page || page < 1 || page > totalPages) return;
    onPageClick(p);
  };
  if (page <= 0 || page > totalPages || totalPages <= 1) return null;
  return (
    <PaginationControlsContainer>
      <PaginationControl
        disabled={page === 1}
        onClick={() => safeOnPageClick(page - 1)}
      >
        <ArrowBackIos />
      </PaginationControl>
      {range(1, totalPages).map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          selected={pageNumber === page}
          onClick={() => safeOnPageClick(pageNumber)}
        >
          {pageNumber}
        </PageNumberButton>
      ))}
      <PaginationControl
        disabled={page === totalPages}
        onClick={() => safeOnPageClick(page + 1)}
      >
        <ArrowForwardIos />
      </PaginationControl>
    </PaginationControlsContainer>
  );
}

export default PaginationControls;
