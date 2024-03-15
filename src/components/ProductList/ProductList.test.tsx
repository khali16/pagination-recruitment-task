import { fireEvent, render } from "@testing-library/react";
import { ProductList } from "./ProductList";

const productsMock = [
  {
    id: 1,
    name: "Product 1",
    year: 2022,
    color: "#FFF",
    pantone_value: "test value",
  },
  {
    id: 2,
    name: "Product 2",
    year: 2023,
    color: "#FFF",
    pantone_value: "test value",
  },
];

describe("ProductList Component Tests", () => {
  it("renders root table correctly with single product", () => {
    const { getByLabelText, getByText } = render(
      <ProductList.Root>
        <ProductList.SingleProduct product={productsMock[0]} />
      </ProductList.Root>
    );

    const table = getByLabelText("products table");
    expect(table).toBeInTheDocument();

    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Year")).toBeInTheDocument();
    expect(getByText("Product 1")).toBeInTheDocument();
  });

  it("renders multiple products correctly", () => {
    const { getByText } = render(
      <ProductList.MultipleProducts products={productsMock} />
    );

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
  });

  it("should pagination sites be clickable", () => {
    const changePageMock = vi.fn();
    const totalPages = 5;
    const currentPage = 2;

    const { getByText } = render(
      <ProductList.Navigation
        aria-label="products pagination"
        total_pages={totalPages}
        page={currentPage}
        changePage={changePageMock}
      />
    );

    const nextPageButton = getByText("3");
    fireEvent.click(nextPageButton);
  });
});
