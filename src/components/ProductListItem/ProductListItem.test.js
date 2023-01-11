import { render, screen, fireEvent } from "@testing-library/react";
import ProductListItem from "./ProductListItem";
import mockedProducts from "../../mocks/en-us/featured-products.json";

const handleImageClick = jest.fn();
const product = mockedProducts.results[0];

describe("ProductListItem", () => {
  test("When clicking on image, invoke onImageClick", async () => {
    render(<ProductListItem {...product} onImageClick={handleImageClick} />);
    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(handleImageClick).toHaveBeenCalledTimes(1);
    expect(handleImageClick).toHaveBeenCalledWith(product.id);
  });
});
