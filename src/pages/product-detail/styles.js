import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  & > *:first-child {
    flex: 5;
    margin: 0 2rem 0 0;
  }
  & > *:last-child {
    flex: 5;
    div,
    p {
      margin: 1rem 0;
    }
  }
`;

export const TitleContainer = styled.div`
  hr {
    margin: 2rem 0;
  }
`;

export const TagsContainer = styled.div`
  padding: 0.2rem 0;
`;

export const SpecsContainer = styled.div``;
