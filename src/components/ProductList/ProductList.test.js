import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductList from "./ProductList";
import mockedProducts from "../../mocks/en-us/featured-products.json";

const products = mockedProducts.results;

const MockedProductsList = ({ title = "", products = [] }) => (
  <BrowserRouter>
    <ProductList title={title} products={products} />
  </BrowserRouter>
);

describe("ProductList", () => {
  test("when title is not empty, it is visible", () => {
    render(<MockedProductsList title="Title" />);
    const title = screen.getByRole("heading", { name: /Title/i });
    expect(title).toBeInTheDocument();
  });
  test("when title is empty, it is not visible", () => {
    render(<MockedProductsList title="" />);
    const title = screen.queryByRole("heading");
    expect(title).not.toBeInTheDocument();
  });
  test("when products is empty, display message", () => {
    render(<MockedProductsList products={[]} />);
    const prodMessage = screen.getByText(/No products were found/i);
    expect(prodMessage).toBeInTheDocument();
  });
  test("when products is not empty, hide message", () => {
    render(<MockedProductsList products={products} />);
    const prodMessage = screen.queryByText(/No products were found/i);
    expect(prodMessage).not.toBeInTheDocument();
  });
  test("when products is not empty, product cards are visible", () => {
    render(<MockedProductsList products={products} />);
    products.forEach((item) => {
      const prod = screen.getByText(item.data.name);
      expect(prod).toBeInTheDocument();
    });
  });
  /*
  test("when clicking on product image navigate to details", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter initialEntries={[routes.productsList]}>
        <ProductList products={products} />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    const product = products[0];
    const prodId = product.id;
    const prodImgAlt = product.data.mainimage.alt;
    const productImageElement = screen.getByAltText(prodImgAlt);

    fireEvent.click(productImageElement);

    expect(testHistory.pathname).toBe(routes.productDetail(prodId));
  });
  */
});
