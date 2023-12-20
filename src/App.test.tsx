import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  it("renders 'Hello World'", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("hello world");
  });
});
