import { fireEvent, render } from "@testing-library/react";
import FilterInput from "./FilterInput";

describe("FilterInput Component Tests", () => {
  it("renders with correct placeholder and value", () => {
    const { getByPlaceholderText } = render(
      <FilterInput filterId="123" onChange={() => {}} />
    );
    const input = getByPlaceholderText(
      "Filter items by id"
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("123");
    expect(input.type).toBe("number");
  });

  it("calls onChange callback with correct value when input changes", () => {
    const onChangeMock = vi.fn();
    const { getByPlaceholderText } = render(
      <FilterInput filterId="123" onChange={onChangeMock} />
    );
    const input = getByPlaceholderText("Filter items by id");
    fireEvent.change(input, { target: { value: "456" } });
    expect(onChangeMock).toHaveBeenCalledWith("456");
  });
});
