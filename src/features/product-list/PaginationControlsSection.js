import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsListPage,
  selectProductsListTotalPages,
  setPage,
} from "./productsListSlice";
import PaginationControls from "../../ui/components/PaginationControls";

function PaginationControlsSection() {
  const page = useSelector(selectProductsListPage);
  const totalPages = useSelector(selectProductsListTotalPages);
  const dispatch = useDispatch();
  return (
    <PaginationControls
      page={page}
      totalPages={totalPages}
      onPageClick={(page) => dispatch(setPage(page))}
    />
  );
}

export default PaginationControlsSection;
