import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";

export const renderRedux = (component) =>
  render(<Provider store={store}>{component}</Provider>);
