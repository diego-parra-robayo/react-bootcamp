import styled from "styled-components";
import Chip from "./Chip";

const ChipGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: {(props)= > props.direction || "row"};
  gap: 0.9rem;
`;

export function ChipGroup({ data = [], onItemSelected }) {
  return (
    <ChipGroupContainer>
      {data.map((itemData) => (
        <Chip
          key={itemData.id}
          selected={itemData.selected ?? false}
          onClick={() => (onItemSelected ? onItemSelected(itemData) : null)}
        >
          {itemData.name}
        </Chip>
      ))}
    </ChipGroupContainer>
  );
}
