import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { ProductsList, SingleProduct } from "../types/models";
import { PRODUCTS_QUERY_KEY } from "../constants/queryKeys";

interface DebouncedQuery {
  products?: SingleProduct | ProductsList;
  isError: boolean;
  isFetching: boolean;
}

export const useDebouncedQuery = (
  filterId: string,
  page: string,
  params: string
): DebouncedQuery => {
  const debouncedFilterId = useDebounce(filterId, 500);
  const {
    data: products,
    isError,
    isFetching,
  } = useQuery<SingleProduct | ProductsList>({
    queryKey: [PRODUCTS_QUERY_KEY, debouncedFilterId, page],
    queryFn: () => fetchData(params),
  });

  return { products, isError, isFetching };
};

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
