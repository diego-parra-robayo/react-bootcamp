import styled from "styled-components";
import { MaterialIconButton } from "./MaterialIcon";

const IconBadgeContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.1rem;
  cursor: pointer;
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.5rem;
  padding: 0.25rem;
  color: white;
  text-align: center;
  border-radius: 100%;
`;

function IconBadge({ iconName, badge, onClick = () => {} }) {
  return (
    <IconBadgeContainer onClick={onClick}>
      <MaterialIconButton iconName={iconName} />
      {badge ? <Badge>{badge}</Badge> : null}
    </IconBadgeContainer>
  );
}

export default IconBadge;
