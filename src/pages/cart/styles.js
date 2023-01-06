import styled from "styled-components";
import colors from "../../resources/colors";

export const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;

  th:not(:nth-child(3)) {
    width: 8%;
  }
  th:first-child {
    width: 2%;
    padding: 0;
  }
`;

export const StyledHeader = styled.thead`
  background-color: ${colors.colorControl};
  border-bottom: 1px solid;
  align-items: center;

  th {
    padding: 2rem;
    text-align: center;
  }
`;

export const StyledRow = styled.tr`
  border-bottom: 1px solid;
  align-items: center;

  td {
    padding: 0 2rem;
    text-align: center;
  }
  td:first-child {
    padding: 0;
  }
  td:nth-child(3) {
    text-align: start;
  }
  td:last-child {
    text-align: end;
    padding: 0 1rem;
  }

  img {
    width: 100%;
  }
`;

export const StyledFooter = styled.tfoot`
  background-color: ${colors.colorControl};

  td {
    text-align: start;
    padding: 0.5rem 1rem;
  }

  td:first-child {
    text-align: start;
    padding: 0.5rem 0;
  }
  td:last-child {
    text-align: end;
    padding: 0.5rem 1rem;
  }
`;
