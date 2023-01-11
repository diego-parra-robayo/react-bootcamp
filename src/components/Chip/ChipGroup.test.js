import { render, screen, fireEvent } from "@testing-library/react";
import { ChipGroup } from "./ChipGroup";

const data = [
  {
    id: "Decorate",
    name: "Decorate",
    selected: true,
  },
  {
    id: "Kitchen",
    name: "Kitchen",
    selected: false,
  },
  {
    id: "Furniture",
    name: "Furniture",
    selected: false,
  },
];

describe("ChipGroup", () => {
  test("Chips are displayed", () => {
    render(<ChipGroup data={data} />);
    data.forEach(({ name }) => {
      const chip = screen.getByText(name);
      expect(chip).toBeInTheDocument();
    });
  });
  test("Clicking on chip invokes function in parameter", () => {
    const handleClick = jest.fn();
    render(<ChipGroup data={data} onItemSelected={handleClick} />);
    const firstElement = screen.getByText(data[0].name);
    fireEvent.click(firstElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(data[0]);
  });
});
