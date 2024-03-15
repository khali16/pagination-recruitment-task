import { render, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

const productMock = {
  id: 1,
  name: "Product Name",
  year: 2022,
  color: "blue",
  pantone_value: "test",
};

describe("ProductCard Component Tests", () => {
  test("renders properly", () => {
    const { getByText } = render(<ProductCard {...productMock} />);

    expect(getByText(productMock.id.toString())).toBeInTheDocument();
    expect(getByText(productMock.name)).toBeInTheDocument();
    expect(getByText(productMock.year.toString())).toBeInTheDocument();
  });

  test("toggles modal when clicked", () => {
    const { getByText, queryByTestId } = render(
      <ProductCard {...productMock} />
    );
    fireEvent.click(getByText(productMock.id.toString()));

    expect(queryByTestId("product-details-modal")).toBeInTheDocument();
  });
});

export default suite;
