import { useQuery } from "@tanstack/react-query";
import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { ConsumerFunction, ProductsList, SingleProduct } from "../models";
import { useDebounce } from "../hooks/useDebounce";

interface ProductsContext {
  filterId: string;
  changeFilterId: ConsumerFunction<string>;
  data?: SingleProduct | ProductsList;
  isFetching: boolean;
  isError: boolean;
}

export const ProductsContext = createContext<ProductsContext | undefined>(
  undefined
);

const fetchData = async (
  filterId: string
): Promise<SingleProduct | ProductsList> => {
  const response = await fetch(
    !!filterId
      ? `https://reqres.in/api/products?per_page=5&id=${filterId}`
      : "https://reqres.in/api/products?per_page=5"
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const ProductsProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [filterId, setFilterId] = useState("");
  const debouncedFilterId = useDebounce(filterId, 500);

  const { data, isError, isFetching } = useQuery<SingleProduct | ProductsList>({
    queryKey: ["productsData", debouncedFilterId],
    queryFn: () => fetchData(debouncedFilterId),
  });

  const changeFilterId = (value: string) => {
    if (!!parseInt(value)) {
      setFilterId(value);
    } else {
      setFilterId("");
    }
  };

  return (
    <ProductsContext.Provider
      value={{ filterId, changeFilterId, data, isError, isFetching }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
