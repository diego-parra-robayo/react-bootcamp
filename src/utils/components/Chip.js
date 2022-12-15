import styled from "styled-components";
import { onPrimaryColor, primaryColor } from "../theme/colors";

const Chip = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: ${(props) => (props.selected ? primaryColor : "#ececec")};
  color: ${(props) => (props.selected ? onPrimaryColor : "#000000")};
  border-radius: 100px;
  font-weight: bold;
  user-select: none;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
  }
`;

const ChipGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: {(props)= > props.direction || "row"};
  gap: 0.9rem;
`;

/**
 *
 * @param {data: [{id: string, name: string, selected: boolean}], onItemSelected: (function(data): void)}
 * @returns {JSX.Element}
 * @constructor
 */
export function ChipGroup({ data = [], onItemSelected }) {
  return (
    <section>
      <ChipGroupContainer>
        {data.map((itemData) => (
          <Chip
            key={itemData.id}
            selected={itemData.selected ?? false}
            onClick={() => onItemSelected(itemData)}
          >
            {itemData.name}
          </Chip>
        ))}
      </ChipGroupContainer>
    </section>
  );
}

export default Chip;
