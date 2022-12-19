import styled from "styled-components";
import { MaterialIconButton } from "../../ui/base-components/MaterialIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsListPage,
  selectProductsListTotalPages,
  setPage,
} from "./productsListSlice";
import { colorPrimary } from "../../ui/theme/colors";

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

function PaginationControls() {
  const page = useSelector(selectProductsListPage);
  const totalPages = useSelector(selectProductsListTotalPages);
  const dispatch = useDispatch();
  const onPageClick = (p) => {
    if (p === page || page < 1 || page > totalPages) return;
    dispatch(setPage(p));
  };
  return (
    <ControlsContainer>
      <MaterialIconButton
        iconName="arrow_back_ios"
        disabled={page === 1}
        onClick={() => onPageClick(page - 1)}
      />
      {range(1, totalPages).map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          selected={pageNumber === page}
          onClick={() => onPageClick(pageNumber)}
        >
          {pageNumber}
        </PageNumberButton>
      ))}
      <MaterialIconButton
        iconName="arrow_forward_ios"
        disabled={page === totalPages}
        onClick={() => onPageClick(page + 1)}
      />
    </ControlsContainer>
  );
}

function range(from = 0, to = 0) {
  if (from > to) return [];
  if (from === to) return [from];
  return [...Array(to - from + 1).keys()].map((i) => i + from);
}

export default PaginationControls;
