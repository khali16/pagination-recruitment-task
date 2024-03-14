import { ProductList } from "./ProductList";
import { Product } from "../../types/models";
import { render } from "../../utils/testUtils";

describe("ProductList Components Tests", () => {
  const sampleProduct: Product = {
    id: 1,
    name: "Sample Product",
    year: 2022,
    pantone_value: "PV-123",
    color: "blue",
  };

  it("Root component renders properly", () => {
    const { getByRole } = render(
      <ProductList.Root>
        <ProductList.SingleProduct product={sampleProduct} />
      </ProductList.Root>
    );

    expect(getByRole("table")).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /id/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /name/i })).toBeInTheDocument();
    expect(getByRole("columnheader", { name: /year/i })).toBeInTheDocument();
  });

  it("MultipleProducts component renders multiple ProductCard components", () => {
    const products: Product[] = [sampleProduct, sampleProduct, sampleProduct];

    const { getAllByText } = render(
      <ProductList.MultipleProducts products={products} />
    );

    const productCards = getAllByText("Sample Product");

    expect(productCards).toHaveLength(products.length);
  });

  it("SingleProduct component renders a ProductCard component", () => {
    const { getByText } = render(
      <ProductList.SingleProduct product={sampleProduct} />
    );

    expect(getByText("Sample Product")).toBeInTheDocument();
  });

  it("Pagination component renders properly", () => {
    const { getByText } = render(
      <ProductList.Pagination page={1} total_pages={5} />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });
});
