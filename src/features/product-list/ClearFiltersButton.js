import { useSearchParams } from "react-router-dom";
import Center from "../../components/Center/Center";
import styled from "styled-components";

const ClearFilterButton = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

function ClearFiltersButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onClearClick = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };
  const categories = searchParams.getAll("category");
  if (!categories || categories.length === 0) {
    return null;
  }
  return (
    <Center>
      <ClearFilterButton onClick={onClearClick}>
        Clear filters
      </ClearFilterButton>
    </Center>
  );
}

export default ClearFiltersButton;
