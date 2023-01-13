import { fireEvent, screen, within } from "@testing-library/react";
import store from "../../redux/store";
import { renderReduxAndNav } from "../../utils/customRender";
import CartPage from "./CartPage";
import products from "../../__fakes__/en-us/products.json";
import {
  addProductQuantityInCart,
  clearCart,
} from "../../redux/cart/cartThunks";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  window.confirm = jest.fn(() => true);
  store.dispatch(clearCart());
});

describe("CartPage", () => {
  test("Validate that an empty state is displayed when there are no items in the cart", async () => {
    renderReduxAndNav(<CartPage />);
    const emptyItemsElement = await screen.findByText(
      /No items added to cart yet/i
    );
    expect(emptyItemsElement).toBeInTheDocument();
  });

  test("Validate that the list of products is shown when there are items in the cart. Each row should contain the main image of the product, its name, unit price, a quantity selector, subtotal and a “remove from cart icon”", async () => {
    renderReduxAndNav(<CartPage />);
    const prodQty = 2;

    act(() => {
      products.results.forEach((prod) => {
        store.dispatch(addProductQuantityInCart(prod, prodQty));
      });
    });

    const cartItemRows = await screen.findAllByTestId(/cart-item-row/i);
    expect(cartItemRows).toHaveLength(products.results.length);

    const firstProd = products.results[0];
    const firstProdElement = cartItemRows[0];
    const firstProdImage = await within(firstProdElement).findByRole("img");
    const firstProdName = await within(firstProdElement).findByText(
      firstProd.data.name
    );
    const firstProdPrice = await within(firstProdElement).findByText(
      RegExp(firstProd.data.price)
    );
    const firstProdQtySelector = await within(firstProdElement).findAllByTitle(
      /quantity/i
    );
    const firstProdQty = await within(firstProdElement).findByText(prodQty);
    const firstProdSubtotalAmount = prodQty * firstProd.data.price;
    const firstProdSubtotal = await within(firstProdElement).findByText(
      RegExp(firstProdSubtotalAmount)
    );
    const firstProdRemoveFromCartButton = await within(
      firstProdElement
    ).findByTitle(/remove from cart/i);

    expect(firstProdImage).toBeInTheDocument();
    expect(firstProdName).toBeInTheDocument();
    expect(firstProdPrice).toBeInTheDocument();
    expect(firstProdQtySelector.length).toBeGreaterThan(0);
    expect(firstProdQty).toBeInTheDocument();
    expect(firstProdSubtotal).toBeInTheDocument();
    expect(firstProdRemoveFromCartButton).toBeInTheDocument();
  });

  test("Validate that the cart total label displays the sum of the subtotals of all items in the cart", async () => {
    renderReduxAndNav(<CartPage />);

    const prodQty = 2;
    let total = 0;
    act(() => {
      products.results.forEach((prod) => {
        store.dispatch(addProductQuantityInCart(prod, prodQty));
        total += prodQty * prod.data.price;
      });
    });

    total = Math.round(total * 100) / 100;

    const cartTotalElement = await screen.findByTestId(/cart-total/i);
    expect(cartTotalElement).toHaveTextContent(`$ ${total}`);
  });

  test("Validate that you can update the quantity of items for a particular product in the cart. Don’t forget to validate that you don’t exceed the stock units available for the selected product", async () => {
    renderReduxAndNav(<CartPage />);

    const prodQty = 2;
    act(() => {
      products.results.forEach((prod) => {
        store.dispatch(addProductQuantityInCart(prod, prodQty));
      });
    });

    const cartItemRows = await screen.findAllByTestId(/cart-item-row/i);
    expect(cartItemRows).toHaveLength(products.results.length);

    const firstProdElement = cartItemRows[0];
    const firstProdAddQtyButton = await within(firstProdElement).findByTitle(
      /add quantity/i
    );
    fireEvent.click(firstProdAddQtyButton);

    const firstProdQtyLabel = await within(firstProdElement).findByTitle(
      /quantity label/i
    );
    expect(firstProdQtyLabel).toHaveTextContent("3");
  });

  test("Validate that you can remove a product from the cart after clicking on the “remove from cart icon”", async () => {
    renderReduxAndNav(<CartPage />);

    const prodQty = 2;
    act(() => {
      products.results.forEach((prod) => {
        store.dispatch(addProductQuantityInCart(prod, prodQty));
      });
    });

    const cartItemRows = await screen.findAllByTestId(/cart-item-row/i);
    expect(cartItemRows).toHaveLength(products.results.length);

    const firstProd = products.results[0];
    const firstProdElement = cartItemRows[0];
    const firstProdRemoveFromCartButton = await within(
      firstProdElement
    ).findByTitle(/remove from cart/i);
    fireEvent.click(firstProdRemoveFromCartButton);

    const newCartItemRows = await screen.findAllByTestId(/cart-item-row/i);
    expect(newCartItemRows).toHaveLength(products.results.length - 1);
    const oldFirstProdName = screen.queryByText(firstProd.data.name);
    expect(oldFirstProdName).not.toBeInTheDocument();
  });
});
