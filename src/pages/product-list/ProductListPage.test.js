import { fireEvent, screen } from "@testing-library/react";
import MockAxios from "axios";
import { renderReduxAndNav } from "../../utils/customRender";
import mockProductCategories from "../../__fakes__/en-us/product-categories.json";
import mockProducts from "../../__fakes__/en-us/products.json";
import ProductListPage from "./ProductListPage";

beforeEach(() => {
  MockAxios.get.mockImplementation((url, config) => {
    if (url === "documents/search") {
      if (config.params.q === '[[at(document.type, "category")]]') {
        return Promise.resolve({ data: mockProductCategories });
      } else if (config.params.q === '[[at(document.type, "product")]]') {
        return Promise.resolve({ data: mockProducts });
      }
    }
    return Promise.reject(new Error("not found"));
  });
});

describe("ProductListPage", () => {
  test("Product Category Sidebar is fetching and rendering data from the API", async () => {
    renderReduxAndNav(<ProductListPage />);
    const categoriesElements = await screen.findAllByTestId(/chip-item/i);
    expect(categoriesElements).not.toHaveLength(0);
    expect(categoriesElements[0]).toHaveTextContent(
      mockProductCategories.results[0].data.name
    );
  });

  test("Category links on Product Category Sidebar are filtering Products Grid correctly interacting with the API", async () => {
    renderReduxAndNav(<ProductListPage />);
    const categoryId = "YWHviRIAACsAyjP3";
    const categoryElement = await screen.findByTestId(
      `chip-item-${categoryId}`
    );
    fireEvent.click(categoryElement);
    const matchingProds = mockProducts.results.filter(
      (prod) => prod.data.category.id === categoryId
    );
    const matchingProdsElements = await screen.findAllByTestId(/prod-item/i);
    expect(matchingProdsElements).toHaveLength(matchingProds.length);
  });

  test("Pagination Controls are generated correctly based on the number of results fetched from the API and the maximum number of products per page", async () => {
    const totalPages = 5;
    MockAxios.get.mockResolvedValue({
      data: { ...mockProducts, total_pages: totalPages },
    });

    renderReduxAndNav(<ProductListPage />);

    const pageNumberElements = await screen.findAllByTitle(/page \d/i);

    expect(pageNumberElements).toHaveLength(totalPages);
    expect(MockAxios.get).toHaveBeenCalledWith(
      "documents/search",
      expect.objectContaining({
        params: expect.objectContaining({ pageSize: 12 }),
      })
    );
  });

  test("Prev button is disabled when the user is on the first page", async () => {
    const page = 1;
    const totalPages = 5;
    MockAxios.get.mockResolvedValue({
      data: { ...mockProducts, page, total_pages: totalPages },
    });

    renderReduxAndNav(<ProductListPage />);

    const prevButton = await screen.findByTitle(/previous page/i);
    expect(prevButton).toBeDisabled();
  });

  test("Next button is working as expected", async () => {
    const page = 1;
    const totalPages = 5;
    MockAxios.get.mockResolvedValue({
      data: { ...mockProducts, page, total_pages: totalPages },
    });

    renderReduxAndNav(<ProductListPage />);

    const nextButton = await screen.findByTitle(/next page/i);
    fireEvent.click(nextButton);

    expect(MockAxios.get).toHaveBeenLastCalledWith(
      "documents/search",
      expect.objectContaining({
        params: expect.objectContaining({ page: page + 1 }),
      })
    );
  });

  test("Prev button is working as expected", async () => {
    const page = 3;
    const totalPages = 5;
    MockAxios.get.mockResolvedValue({
      data: { ...mockProducts, page, total_pages: totalPages },
    });

    renderReduxAndNav(<ProductListPage />);

    const prevButton = await screen.findByTitle(/previous page/i);
    fireEvent.click(prevButton);

    expect(MockAxios.get).toHaveBeenLastCalledWith(
      "documents/search",
      expect.objectContaining({
        params: expect.objectContaining({ page: page - 1 }),
      })
    );
  });

  test("Next button is disabled when the user is on the last page", async () => {
    const page = 5;
    const totalPages = 5;
    MockAxios.get.mockResolvedValue({
      data: { ...mockProducts, page, total_pages: totalPages },
    });

    renderReduxAndNav(<ProductListPage />);

    const nextButton = await screen.findByTitle(/next page/i);
    expect(nextButton).toBeDisabled();
  });
});
