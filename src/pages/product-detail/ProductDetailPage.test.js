import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { renderRedux } from "../../utils/customRender";
import ProductDetailPage from "./ProductDetailPage";
import mockProduct from "../../__fakes__/en-us/product.json";
import MockAxios from "axios";
import store from "../../redux/store";
import {
  selectCartItems,
  selectCartQuantity,
} from "../../redux/cart/cartSelectors";

const productId = "YZZ_XhIAAC0AvmiA";
const MockProductDetailPage = () => (
  <MemoryRouter initialEntries={[`/product/${productId}`]}>
    <Routes>
      <Route path={"/product/:id"} element={<ProductDetailPage />} />
    </Routes>
  </MemoryRouter>
);

beforeEach(() => {
  MockAxios.get.mockResolvedValue({ data: mockProduct });
});

describe("ProductDetailPage", () => {
  test("Product Detail Page is fetching and rendering data from the API for a particular product", async () => {
    renderRedux(<MockProductDetailPage />);

    const imageElement = await screen.findByRole("img");
    expect(imageElement).toHaveAttribute(
      "src",
      mockProduct.results[0].data.images[0].image.url
    );

    const nameElement = await screen.findByText(
      mockProduct.results[0].data.name
    );
    expect(nameElement).toBeInTheDocument();
  });

  test("Product Detail Page contains the following labels: name of the selected product, current price, SKU, category name, a list of tags, and description", async () => {
    renderRedux(<MockProductDetailPage />);

    const product = mockProduct.results[0];
    const nameElement = await screen.findByText(product.data.name);
    const priceElement = await screen.findByText(RegExp(product.data.price));
    const skuElement = await screen.findByText(RegExp(product.data.sku));
    const categoryElement = await screen.findByText(
      RegExp(product.data.category.slug)
    );
    const descriptionElement = await screen.findByText(
      product.data.description[0].text
    );

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(skuElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    product.tags.forEach(async (tag) => {
      const tagElement = await screen.findByText(product.data.tag);
      expect(tagElement).toBeInTheDocument();
    });
  });

  test("Product Detail Page contains a quantity selector and an “Add to Cart” button", async () => {
    renderRedux(<MockProductDetailPage />);

    const quantitySelector = await screen.findByLabelText(/items/i);
    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    expect(quantitySelector).toBeInTheDocument();
    expect(addToCartButton).toBeInTheDocument();
  });

  test("Validate that after clicking on the “Add to Cart” button, the number of items that are selected in quantity selector control are added to the cart", async () => {
    renderRedux(<MockProductDetailPage />);

    const qtyInput = await screen.findByLabelText(/items/i, {
      selector: "input",
    });
    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.change(qtyInput, { target: { value: 2 } });
    fireEvent.click(addToCartButton);

    const qty = await selectCartQuantity(store.getState());
    expect(qty).toBeGreaterThan(0);
  });

  test("Validate that the “Add to Cart” button is disabled when the stock units available for the selected product is zero.", async () => {
    MockAxios.get.mockResolvedValue({
      data: {
        ...mockProduct,
        results: [
          {
            ...mockProduct.results[0],
            data: { ...mockProduct.results[0].data, stock: 0 },
          },
        ],
      },
    });

    renderRedux(<MockProductDetailPage />);

    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartButton).toBeDisabled();
  });
});
