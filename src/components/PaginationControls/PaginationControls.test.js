import { render, screen, fireEvent } from "@testing-library/react";
import PaginationControls from "./PaginationControls";

const handleClick = jest.fn();

describe("PaginationControls", () => {
  describe("PageNumbers", () => {
    test("page numbers between 1 and totalPages are visible", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      for (var i = 1; i <= 5; i++) {
        const page = screen.getByRole("button", { name: i });
        expect(page).toBeInTheDocument();
      }
    });
    test("when pageNumber is clicked, invoke onPageClick with that pageNumber", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      const pageNumber = 3;
      const pageNumberElement = screen.getByRole("button", {
        name: pageNumber,
      });
      fireEvent.click(pageNumberElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(pageNumber);
    });
  });

  describe("ArrowNext", () => {
    const arrowNextTitle = "Next";
    test("arrow controls are visible", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      const arrowNext = screen.getByTitle(arrowNextTitle);
      expect(arrowNext).toBeInTheDocument();
    });
    test("arrowNext is disabled when page is last", () => {
      render(
        <PaginationControls page={5} totalPages={5} onPageClick={handleClick} />
      );
      const arrowNext = screen.getByTitle(arrowNextTitle);
      expect(arrowNext).toBeDisabled();
    });
    test("When arrow next is clicked, invoke onPageClick with current page + 1", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      const arrowNext = screen.getByTitle(arrowNextTitle);
      fireEvent.click(arrowNext);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(2);
    });
  });

  describe("ArrowBack", () => {
    const arrowBackTitle = "Previous";
    test("arrowBack is visible", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      const arrowBack = screen.getByTitle(arrowBackTitle);
      expect(arrowBack).toBeInTheDocument();
    });
    test("arrowBack is disabled when page is 1", () => {
      render(
        <PaginationControls page={1} totalPages={5} onPageClick={handleClick} />
      );
      const arrowBack = screen.getByTitle(arrowBackTitle);
      expect(arrowBack).toBeDisabled();
    });
    test("when arrowBack is clicked, invoke onPageClick with currentPage - 1", () => {
      render(
        <PaginationControls page={2} totalPages={5} onPageClick={handleClick} />
      );
      const arrowBack = screen.getByTitle(arrowBackTitle);
      fireEvent.click(arrowBack);
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(1);
    });
  });
});
