import styled from "styled-components";

const Spacer = styled.div`
  width: ${(props) => props.width || 0};
  height: ${(props) => props.height || 0};
`;

export default Spacer;
