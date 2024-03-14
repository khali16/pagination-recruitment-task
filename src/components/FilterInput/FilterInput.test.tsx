import { vitest, describe, afterEach, expect, it, vi } from "vitest";
import { fireEvent, cleanup } from "@testing-library/react";
import FilterInput from "./FilterInput";
import { render } from "../../utils/testUtils";

vitest.mock("./useProductsContext", () => ({
  useProductsContext: () => ({
    changeFilterId: vi.fn(),
    filterId: "123",
  }),
}));

describe("FilterInput component", () => {
  afterEach(cleanup);

  it("should render properly", () => {
    const { getByPlaceholderText } = render(<FilterInput />);
    const input = getByPlaceholderText("Filter items by id");
    expect(input).toBeTruthy();
  });

  it("should call changeFilterId when input value changes", () => {
    const changeFilterId = vi.fn();
    const { getByPlaceholderText } = render(<FilterInput />);

    const inputElement = getByPlaceholderText("Filter items by id");
    fireEvent.change(inputElement, { target: { value: "123" } });

    expect(changeFilterId).toHaveBeenCalledWith("123");
  });

  it("should display correct value in the input field", () => {
    const { getByPlaceholderText } = render(<FilterInput />);
    const input = getByPlaceholderText("Filter items by id");
    expect(input?.getAttribute("value")).toBe("3");
  });
});
