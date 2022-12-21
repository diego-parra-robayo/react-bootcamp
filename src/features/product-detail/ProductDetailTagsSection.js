import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0.2rem 0;
`;

function ProductDetailTagsSection({ tags }) {
  return (
    <StyledContainer>
      <div>Tags</div>
      <ul>
        {tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </StyledContainer>
  );
}

export default ProductDetailTagsSection;
