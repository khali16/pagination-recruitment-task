import { render, fireEvent } from "@testing-library/react";
import ProductDetailsModal from "./ProductDetailsModal";

const propsMock = {
  id: 1,
  name: "Product Name",
  year: 2022,
  pantone_value: "PV-123",
  color: "blue",
  showDetailsModal: true,
  toggleDetailsModal: vi.fn(),
};

const disabledModalProps = { ...propsMock, showDetailsModal: false };

describe("ProductDetailsModal Component Tests", () => {
  it("renders properly when modal is shown", () => {
    const { getByText } = render(<ProductDetailsModal {...propsMock} />);

    expect(getByText("Product details")).toBeInTheDocument();
    expect(getByText("Product Name")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();
    expect(getByText("PV-123")).toBeInTheDocument();
    expect(getByText("blue")).toBeInTheDocument();
  });

  it("does not render when modal is hidden", () => {
    const { queryByTestId } = render(
      <ProductDetailsModal {...disabledModalProps} />
    );

    expect(queryByTestId("product-details-modal")).toBeNull();
  });

  it("toggles modal when closed", () => {
    const { getByText } = render(<ProductDetailsModal {...propsMock} />);
    fireEvent.click(getByText("X"));

    expect(propsMock.toggleDetailsModal).toHaveBeenCalled();
  });
});

export default suite;
