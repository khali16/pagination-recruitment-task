import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => console.error(`Cache error: ${error.message}`), // TODO handle invalid cache in user friendly way
  }),
});
