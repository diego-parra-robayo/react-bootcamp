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
  test("Featured Banners Slider is rendering and fetching data from the API", async () => {
    renderRedux(<MockHomePage />);
    const bannerImg = await screen.findByTitle(/banner-img/i);
    expect(bannerImg).toHaveAttribute(
      "src",
      expect.stringMatching(/[\S]*images.prismic.io[\S]*/)
    );
  });
});
