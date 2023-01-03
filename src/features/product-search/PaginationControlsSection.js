import { useDispatch, useSelector } from "react-redux";
import PaginationControls from "../../ui/components/PaginationControls";
import selectSearchPage from "../../redux/search/selectors/selectSearchPage";
import selectSearchTotalPages from "../../redux/search/selectors/selectSearchTotalPages";
import { searchSetPage } from "../../redux/search/thunks";

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
