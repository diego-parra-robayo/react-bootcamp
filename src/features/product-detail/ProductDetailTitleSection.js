import styled from "styled-components";

const StyledContainer = styled.div`
  hr {
    margin: 2rem 0;
  }
`;

function ProductDetailTitleSection({ name, price }) {
  return (
    <StyledContainer>
      <h1>{name}</h1>
      <h3>$ {price}</h3>
      <hr />
    </StyledContainer>
  );
}

export default ProductDetailTitleSection;
