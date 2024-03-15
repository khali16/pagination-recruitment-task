import { useSuspenseQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { MultipleProductDTO, SingleProductDTO } from "../types/models";
import { PRODUCTS_QUERY_KEY } from "../constants/queryKeys";

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
  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      throw new Error(
        "Make sure you provided right params :) Client error: " +
          response.status
      );
    } else if (response.status >= 500 && response.status < 600) {
      throw new Error("Server error: " + response.status);
    } else {
      throw new Error("Unexpected error: " + response.status);
    }
  }
  return response.json();
};
