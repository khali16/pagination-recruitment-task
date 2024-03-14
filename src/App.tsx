import "./App.css";
import FilterInput from "./components/FilterInput";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ProductsProvider } from "./context/ProductsContext";
import ProductsSection from "./components/ProductsSection";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => console.error(`Something went wrong: ${error.message}`),
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <FilterInput />
        <ProductsSection />
      </ProductsProvider>
    </QueryClientProvider>
  );
}

export default App;
