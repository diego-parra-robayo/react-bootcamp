import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderRedux } from "../../utils/reduxTestUtils";
import HomePage from "./HomePage";

const MockHomePage = () => (
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>
);

describe("HomePage", () => {
  test("Featured Banners Slider is fetching and rendering data from the API", async () => {
    renderRedux(<MockHomePage />);
    const bannerImg = await screen.findByTitle(/banner-img/i);
    expect(bannerImg).toHaveAttribute(
      "src",
      expect.stringMatching(/[\S]*images.prismic.io[\S]*/)
    );
  });
  test("Categories Carousel is fetching and rendering data from the API", async () => {
    renderRedux(<MockHomePage />);
    const categoriesElements = await screen.findAllByTestId(/chip-item[\S]*/i);
    expect(categoriesElements).not.toHaveLength(0);
  });
  test("Featured products grid is rendering and fetching data from the API", async () => {
    renderRedux(<MockHomePage />);
    const productElements = await screen.findAllByTestId(/prod-item[\S]*/);
    expect(productElements).not.toHaveLength(0);
    expect(productElements[0]).toContainHTML("img");
  });
});
