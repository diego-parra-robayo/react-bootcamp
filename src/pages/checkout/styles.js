import styled from "styled-components";
import colors from "../../resources/colors";

export const StyledMain = styled.main`
  display: flex;
  margin: 1rem 0;
  section:first-child {
    flex: 5;
    border-right: thin gray solid;
    padding: 0 4rem;
  }
  section:last-child {
    flex: 5;
    padding: 0 4rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 1rem;
  }
  label {
    width: 30%;
    margin-right: 1rem;
  }
  input,
  textarea {
    width: 70%;
    resize: none;
    padding: 0.4rem;
    border: lightgray solid thin;
    border-radius: 2px;
  }
  div:last-child {
    justify-content: center;
    margin: 2rem 0;
  }
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: ${colors.colorControl};
  }
  thead th {
    padding: 0.5rem;
    width: 15%;
  }
  thead th:first-child {
    width: 70%;
  }

  tbody:before,
  tbody:after {
    content: "@";
    line-height: 1rem;
    visibility: hidden;
  }
  tbody td + td {
    //border-left: 1px solid lightgray;
    padding: 0.5rem;
  }
  tbody td:not(:nth-child(1)) {
    align-items: end;
    text-align: end;
  }

  tfoot td {
    padding: 0.5rem;
    background-color: ${colors.colorControl};
    text-align: end;
  }
`;
