import { fireEvent } from "@testing-library/react";
import ProductsPagination from "./ProductsPagination";
import { render } from "../../utils/testUtils";

describe("ProductsPagination Component Tests", () => {
  it("Renders properly", () => {
    const props = {
      page: 1,
      total_pages: 5,
    };

    const { getByRole } = render(<ProductsPagination {...props} />);

    const pagination = getByRole("navigation");
    expect(pagination).toBeInTheDocument();
    expect(pagination).toHaveAttribute("aria-label", "products pagination");
  });

  it("Calls changePage when a new page is selected", () => {
    const mockChangePage = vi.fn();
    const props = {
      page: 1,
      total_pages: 5,
    };

    const { getByText } = render(<ProductsPagination {...props} />);

    fireEvent.click(getByText(2));

    expect(mockChangePage).toHaveBeenCalledWith(expect.any(Object), 2);
  });
});

vi.mock("../../hooks/useProductsContext", () => ({
  useProductsContext: () => ({
    changePage: vi.fn(),
  }),
}));
