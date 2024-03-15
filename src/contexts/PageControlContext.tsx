import {
  ChangeEvent,
  FunctionComponent,
  PropsWithChildren,
  createContext,
} from "react";
import { useSearchParams } from "react-router-dom";
import { ChangePage, ConsumerFunction } from "../types/models";
export interface PageControlContextState {
  filterId: string;
  changeFilterId: ConsumerFunction<string>;
  page: string;
  changePage: ChangePage;
  searchParams: string;
}

export const PageControlContext = createContext<
  PageControlContextState | undefined
>(undefined);

export const PageControlContextProvider: FunctionComponent<
  PropsWithChildren
> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterId = searchParams.get("id") || "";
  const page = searchParams.get("page") || "";

  const changeFilterId = (value: string) => {
    setSearchParams(!!parseInt(value) ? { id: value } : {});
  };

  const changePage = (_: ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  return (
    <PageControlContext.Provider
      value={{
        filterId,
        changeFilterId,
        page,
        changePage,
        searchParams: searchParams.toString(),
      }}
    >
      {children}
    </PageControlContext.Provider>
  );
};
