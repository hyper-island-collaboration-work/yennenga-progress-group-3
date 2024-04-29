import { render } from "@testing-library/react";
import ContextProvider from "../components/ContextProvider";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: ContextProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };