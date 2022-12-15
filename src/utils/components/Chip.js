import styled from "styled-components";

const Chip = styled.div`
  display: inline-block;
  padding: 0.75rem 2rem;
  cursor: pointer;
  background: #ececec;
  border-radius: 100px;
  font-weight: bold;
  margin: 0.5rem;
  user-select: none;

  &:hover {
    background: #dcdbdb;
  }

  &:active {
    background: #cccccc;
  }
`;

const ChipGroupContainer = styled.div`
  @media (min-width: 500px) {
    height: 4rem;
    white-space: nowrap;
    overflow-y: scroll;
  }
`;

export function ChipGroup({ data = [] }) {
  return (
    <section>
      <ChipGroupContainer>
        {data.map((itemData) => (
          <Chip key={itemData.id}>{itemData.name}</Chip>
        ))}
      </ChipGroupContainer>
    </section>
  );
}

export default Chip;
