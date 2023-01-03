import { useDispatch, useSelector } from "react-redux";
import PaginationControls from "../../ui/components/PaginationControls";
import {
  selectProductsListPage,
  selectProductsListTotalPages,
} from "../../redux/product-list/selectors";
import { setPage } from "../../redux/product-list/thunks";

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
