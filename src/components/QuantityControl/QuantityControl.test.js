import { screen, fireEvent, render } from "@testing-library/react";
import QuantityControl from "./QuantityControl";

const handleAddPressed = jest.fn();
const handleRemovePressed = jest.fn();

describe("QuantityControl", () => {
  describe("Add button", () => {
    test("add button is visible and enabled", () => {
      render(
        <QuantityControl
          quantity={1}
          maxStock={10}
          onAddPressed={handleAddPressed}
          onRemovePressed={handleRemovePressed}
        />
      );
      const addButton = screen.getByTitle(/Add/i);
      expect(addButton).toBeInTheDocument();
      expect(addButton).not.toBeDisabled();
    });
    test("add button is disabled when quantity is already maxStock", () => {
      render(
        <QuantityControl
          quantity={10}
          maxStock={10}
          onAddPressed={handleAddPressed}
          onRemovePressed={handleRemovePressed}
        />
      );
      const addButton = screen.getByTitle(/Add/i);
      expect(addButton).toBeDisabled();
    });
    test("when add is pressed onAddPressed is invoked", () => {
      render(
        <QuantityControl
          quantity={1}
          maxStock={10}
          onAddPressed={handleAddPressed}
          onRemovePressed={handleRemovePressed}
        />
      );
      const addButton = screen.getByTitle(/Add/i);
      fireEvent.click(addButton);
      expect(handleAddPressed).toHaveBeenCalledTimes(1);
    });
  });
});
