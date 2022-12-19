import styled from "styled-components";

const StyledSpacer = styled.div`
  width: ${(props) => props.width || 0};
  height: ${(props) => props.height || 0};
`;

function Spacer({ height, width }) {
  return <StyledSpacer width={width} height={height} />;
}

export default Spacer;
