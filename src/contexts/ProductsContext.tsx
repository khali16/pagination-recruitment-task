import { useQuery } from "@tanstack/react-query";
import {
  ChangeEvent,
  FunctionComponent,
  PropsWithChildren,
  createContext,
} from "react";
import { ConsumerFunction, ProductsList, SingleProduct } from "../types/models";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

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

const fetchData = async (
  params: string
): Promise<SingleProduct | ProductsList> => {
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&${params}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const ProductsProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const filterId = searchParams.get("id") || "";
  const page = searchParams.get("page");
  const debouncedFilterId = useDebounce(filterId, 500);

  const { data, isError, isFetching } = useQuery<SingleProduct | ProductsList>({
    queryKey: ["productsData", debouncedFilterId, page],
    queryFn: () => fetchData(searchParams.toString()),
  });

  const changeFilterId = (value: string) => {
    if (!!parseInt(value)) {
      setSearchParams({ id: value });
    } else {
      setSearchParams({});
    }
  };

  const changePage = (_: ChangeEvent<unknown>, value: number) =>
    setSearchParams({ page: value.toString() });

  return (
    <ProductsContext.Provider
      value={{
        filterId,
        changeFilterId,
        changePage,
        data,
        isError,
        isFetching,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
