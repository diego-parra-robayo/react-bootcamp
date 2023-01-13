import { MemoryRouter, Routes, Route } from "react-router-dom";
import { renderRedux } from "../../utils/customRender";
import SearchPage from "./SearchPage";
import mockSearchResults from "../../__fakes__/en-us/products.json";
import MockAxios from "axios";
import { screen } from "@testing-library/react";

const searchQuery = "furniture";
const MockSearchPage = () => (
  <MemoryRouter initialEntries={[`/search?q=${searchQuery}`]}>
    <Routes>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  </MemoryRouter>
);

beforeEach(() => {
  MockAxios.get.mockResolvedValue({ data: mockSearchResults });
});

describe("SearchPage", () => {
  test("Validate that the list of results is rendering data according to the “searchTerm” provided", async () => {
    renderRedux(<MockSearchPage />);

    const resultElements = await screen.findAllByTestId(/prod-item/i);

    expect(resultElements).toHaveLength(mockSearchResults.results.length);
  });

  test("Validate that an empty state is displayed when there are no results for the “searchTerm” provided", async () => {
    MockAxios.get.mockResolvedValue({
      data: { ...mockSearchResults, results: [] },
    });
    renderRedux(<MockSearchPage />);

    const emptyStateMessageElement = await screen.findByText(
      /No products were found. Try another search/i
    );
    expect(emptyStateMessageElement).toBeInTheDocument();

    const productItems = screen.queryByTestId(/prod-item/i);
    expect(productItems).not.toBeInTheDocument();
  });
});
