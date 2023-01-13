import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

const MockReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const MockNav = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export const renderRedux = (ui, options) =>
  render(ui, { wrapper: MockReduxProvider, ...options });

export const renderNav = (ui, options) =>
  render(ui, { wrapper: MockNav, ...options });

export const renderReduxAndNav = (ui, options) =>
  render(ui, {
    wrapper: ({ children }) => (
      <MockReduxProvider>
        <MockNav>{children}</MockNav>
      </MockReduxProvider>
    ),
    ...options,
  });
