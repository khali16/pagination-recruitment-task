import {
  ChangeEvent,
  FunctionComponent,
  PropsWithChildren,
  Suspense,
  createContext,
} from "react";
import { ConsumerFunction, ProductsList, SingleProduct } from "../types/models";
import { useSearchParams } from "react-router-dom";
import { useDebouncedQuery } from "../hooks/useDebouncedQuery";
interface ProductsContext {
  filterId: string;
  changeFilterId: ConsumerFunction<string>;
  changePage: (event: ChangeEvent<unknown>, value: number) => void;
  data?: SingleProduct | ProductsList;
  isFetching: boolean;
  isError: boolean;
}

export const ProductsContext = createContext<ProductsContext | undefined>(
  undefined
);

export const ProductsProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterId = searchParams.get("id") || "";
  const page = searchParams.get("page") || "";
  const { products, isError, isFetching } = useDebouncedQuery(
    filterId,
    page,
    searchParams.toString()
  );

  const changeFilterId = (value: string) => {
    setSearchParams(!!parseInt(value) ? { id: value } : {});
  };

  const changePage = (_: ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  return (
    <ProductsContext.Provider
      value={{
        filterId,
        changeFilterId,
        changePage,
        data: products,
        isError,
        isFetching,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
