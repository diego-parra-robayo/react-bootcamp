import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

const MockSearchBar = () => (
  <BrowserRouter>
    <SearchBar />
  </BrowserRouter>
);

describe("SearchBar", () => {
  test("navigate when searching something", () => {
    render(<MockSearchBar />);
    const input = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Search" } });
    fireEvent.click(submitButton);
    //  TODO: Test navigation to search
  });
});
