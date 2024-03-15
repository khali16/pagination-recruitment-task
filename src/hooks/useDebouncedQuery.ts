import { useSuspenseQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { MultipleProductDTO, SingleProductDTO } from "../types/models";
import { PRODUCTS_QUERY_KEY } from "../constants/queryKeys";
import { processErrorResponse } from "../utils/httpUtils";

interface DebouncedQuery {
  products?: SingleProductDTO | MultipleProductDTO;
  isError: boolean;
  isPending: boolean;
  isRefetching: boolean;
  error: Error | null;
  status: "error" | "success";
}

export const useDebouncedQuery = (
  filterId: string,
  page: string,
  params: string
): DebouncedQuery => {
  const debouncedFilterId = useDebounce(filterId, 200);
  const {
    data: products,
    isError,
    isFetching,
    isPending,
    error,
    status,
  } = useSuspenseQuery<SingleProductDTO | MultipleProductDTO>({
    queryKey: [PRODUCTS_QUERY_KEY, debouncedFilterId, page],
    queryFn: () => fetchData(params),
    retry: false,
  });

  return {
    products,
    isError,
    isPending,
    isRefetching: isFetching,
    error,
    status,
  };
};

const fetchData = async (
  params: string
): Promise<SingleProductDTO | MultipleProductDTO> => {
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&${params}`
  );
  return response.ok ? response.json() : processErrorResponse(response.status);
};
