import { useDispatch, useSelector } from "react-redux";
import {
  searchSetPage,
  selectSearchPage,
  selectSearchTotalPages,
} from "./searchSlice";
import PaginationControls from "../../ui/components/PaginationControls";

function PaginationControlsSection() {
  const page = useSelector(selectSearchPage);
  const totalPages = useSelector(selectSearchTotalPages);
  const dispatch = useDispatch();
  return (
    <PaginationControls
      page={page}
      totalPages={totalPages}
      onPageClick={(page) => dispatch(searchSetPage(page))}
    />
  );
}

export default PaginationControlsSection;
