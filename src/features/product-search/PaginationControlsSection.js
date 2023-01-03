import { useDispatch, useSelector } from "react-redux";
import { searchSetPage } from "../../redux/search/searchSlice";
import PaginationControls from "../../ui/components/PaginationControls";
import {
  selectSearchPage,
  selectSearchTotalPages,
} from "../../redux/search/searchSelectors";

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
