import { screen } from "@testing-library/react";
import { renderNav } from "../../utils/customRender";
import BannersSection from "./BannersSection";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";
import mockFeaturedBanners from "../../__fakes__/en-us/featured-banners.json";
import mockProductCategories from "../../__fakes__/en-us/product-categories.json";
import mockFeaturedProducts from "../../__fakes__/en-us/featured-products.json";
import MockAxios from "axios";

describe("HomePage", () => {
  describe("BannersSection", () => {
    test("Featured Banners Slider is fetching and rendering data from the API", async () => {
      MockAxios.get.mockResolvedValue({ data: mockFeaturedBanners });
      renderNav(<BannersSection />);
      const bannerImg = await screen.findByTitle(/banner-img/i);
      expect(bannerImg).toHaveAttribute(
        "src",
        mockFeaturedBanners.results[0].data.main_image.url
      );
    });
  });
  describe("CategoriesSection", () => {
    test("Categories Carousel is fetching and rendering data from the API", async () => {
      MockAxios.get.mockResolvedValue({ data: mockProductCategories });
      renderNav(<CategoriesSection />);
      const categoriesElements = await screen.findAllByTestId(
        /chip-item[\S]*/i
      );
      expect(categoriesElements).not.toHaveLength(0);
      expect(categoriesElements[0]).toHaveTextContent(
        mockProductCategories.results[0].data.name
      );
    });
  });
  describe("ProductsSection", () => {
    test("Featured products grid is rendering and fetching data from the API", async () => {
      MockAxios.get.mockResolvedValue({ data: mockFeaturedProducts });
      renderNav(<ProductsSection />);
      const productElements = await screen.findAllByTestId(/prod-item[\S]*/);
      expect(productElements).not.toHaveLength(0);
      expect(productElements[0]).toContainHTML("img");
      expect(productElements[0]).toHaveTextContent(
        mockFeaturedProducts.results[0].data.name
      );
    });
  });
});
