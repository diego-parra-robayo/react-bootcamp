import { screen } from "@testing-library/react";
import { renderNav } from "../../utils/customRender";
import BannersSection from "./BannersSection";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";

describe("HomePage", () => {
  describe("BannersSection", () => {
    test("Featured Banners Slider is fetching and rendering data from the API", async () => {
      renderNav(<BannersSection />);
      const bannerImg = await screen.findByTitle(/banner-img/i);
      expect(bannerImg).toHaveAttribute(
        "src",
        expect.stringMatching(/[\S]*images.prismic.io[\S]*/)
      );
    });
  });
  describe("CategoriesSection", () => {
    test("Categories Carousel is fetching and rendering data from the API", async () => {
      renderNav(<CategoriesSection />);
      const categoriesElements = await screen.findAllByTestId(
        /chip-item[\S]*/i
      );
      expect(categoriesElements).not.toHaveLength(0);
    });
  });
  describe("ProductsSection", () => {
    test("Featured products grid is rendering and fetching data from the API", async () => {
      renderNav(<ProductsSection />);
      const productElements = await screen.findAllByTestId(/prod-item[\S]*/);
      expect(productElements).not.toHaveLength(0);
      expect(productElements[0]).toContainHTML("img");
    });
  });
});
