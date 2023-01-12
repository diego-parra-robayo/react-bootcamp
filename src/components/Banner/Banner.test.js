import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "./Banner";

const img1 =
  "https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705";
const img2 =
  "https://images.prismic.io/wizeline-academy/305e2781-5f25-4c00-bef7-1041b49def37_banner-1-2.jpeg?auto=compress,format&rect=103,0,1226,600&w=1440&h=705";
const img3 =
  "https://images.prismic.io/wizeline-academy/d29a4958-97e1-4fe5-b1db-ee9be564a2dd_banner-2-2.jpeg?auto=compress,format&rect=85,0,1430,700&w=1440&h=705";
const data = [
  {
    id: "YWYpQRIAACkA3RZr",
    src: img1,
    alt: "AMAZING FINISHES - BEDROOM",
  },
  {
    id: "YWYmORIAAC4A3Qio",
    src: img2,
    alt: "A GREAT STYLE - LIVING ROOM",
  },
  {
    id: "YWYoshIAACkA3RPe",
    src: img3,
    alt: "GREAT VERSATILITY - DINING ROOM",
  },
];

describe("Banner", () => {
  test("Image is displayed", () => {
    render(<Banner data={data} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  test("Image is loaded", () => {
    render(<Banner data={data} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", img1);
  });
  test("Image is automatically switched every x secs", async () => {
    jest.useFakeTimers();
    const interval = 2000;
    render(<Banner data={data} interval={interval} />);
    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", img1);

    setTimeout(() => {
      expect(image).toHaveAttribute("src", img2);
    }, interval + interval / 2);
    jest.useRealTimers();
  });
});

describe("Banner controls", () => {
  test("Controls are displayed", () => {
    render(<Banner data={data} />);
    const arrowBack = screen.getByTitle(/back/i);
    expect(arrowBack).toBeInTheDocument();
    const arrowNext = screen.getByTitle(/next/i);
    expect(arrowNext).toBeInTheDocument();
  });
  test("Previous image is shown when clicking on prev arrow", async () => {
    render(<Banner data={data} />);

    const arrowBack = screen.getByTitle(/back/i);
    fireEvent.click(arrowBack);

    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute("src", img3);
  });
  test("Next image is shown when clicking on next arrow", async () => {
    render(<Banner data={data} />);

    const arrowNext = screen.getByTitle(/next/i);
    fireEvent.click(arrowNext);

    const image = await screen.findByRole("img");
    expect(image).toHaveAttribute("src", img2);
  });
});
