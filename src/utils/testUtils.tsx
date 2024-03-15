import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import { PageControlContextState } from "../contexts/PageControlContext";

const AllTheProviders: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProductsContext.Provider
      value={{
        changeFilterId: vi.fn(),
        changePage: vi.fn(),
        filterId: "3",
        isError: false,
        isFetching: false,
        data: undefined,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
