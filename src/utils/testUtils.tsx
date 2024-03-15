import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import { PageControlContext } from "../contexts/PageControlContext";

const AllTheProviders: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <PageControlContext.Provider
      value={{
        changeFilterId: vi.fn(),
        changePage: vi.fn(),
        filterId: "3",
        page: "1",
        searchParams: "id=3&page=1",
      }}
    >
      {children}
    </PageControlContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
