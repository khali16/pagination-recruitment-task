import { render, fireEvent } from "@testing-library/react";
import ProductDetailsModal from "./ProductDetailsModal";

describe("ProductDetailsModal Component Tests", () => {
  it("Renders properly when modal is shown", () => {
    const product = {
      id: 1,
      name: "Product Name",
      year: 2022,
      pantone_value: "PV-123",
      color: "blue",
      showDetailsModal: true,
      toggleDetailsModal: vi.fn(),
    };

    const { getByText } = render(<ProductDetailsModal {...product} />);

    expect(getByText("Product details")).toBeInTheDocument();
    expect(getByText("Product Name")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();
    expect(getByText("PV-123")).toBeInTheDocument();
    expect(getByText("blue")).toBeInTheDocument();
  });

  it("Does not render when modal is hidden", () => {
    const product = {
      id: 1,
      name: "Product Name",
      year: 2022,
      pantone_value: "PV-123",
      color: "blue",
      showDetailsModal: false,
      toggleDetailsModal: vi.fn(),
    };

    const { queryByTestId } = render(<ProductDetailsModal {...product} />);

    expect(queryByTestId("product-details-modal")).toBeNull();
  });

  it("Toggles modal when closed", () => {
    const product = {
      id: 1,
      name: "Product Name",
      year: 2022,
      pantone_value: "PV-123",
      color: "blue",
      showDetailsModal: true,
      toggleDetailsModal: vi.fn(),
    };

    const { getByText } = render(<ProductDetailsModal {...product} />);
    fireEvent.click(getByText("X"));

    expect(product.toggleDetailsModal).toHaveBeenCalled();
  });
});

export default suite;
