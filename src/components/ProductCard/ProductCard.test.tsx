import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Vitest from "vitest";
import ProductCard from "./ProductCard";

describe("ProductCard Component Tests", () => {
  test("Renders properly", () => {
    const product = {
      id: 1,
      name: "Product Name",
      year: 2022,
      color: "blue",
      pantone_value: "test",
    };

    const { getByText } = render(<ProductCard {...product} />);

    expect(getByText(product.id.toString())).toBeInTheDocument();
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.year.toString())).toBeInTheDocument();
  });

  test("Toggles modal when clicked", () => {
    const product = {
      id: 1,
      name: "Product Name",
      year: 2022,
      color: "blue",
      pantone_value: "test",
    };

    const { getByText, queryByTestId, getByRole } = render(
      <ProductCard {...product} />
    );
    fireEvent.click(getByText(product.id.toString()));

    expect(queryByTestId("product-details-modal")).toBeInTheDocument();
  });
});

export default suite;
