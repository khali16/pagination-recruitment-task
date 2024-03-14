import FilterInput from "./components/FilterInput/FilterInput";
import { QueryClientProvider } from "@tanstack/react-query";
import { ProductsProvider } from "./contexts/ProductsContext";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import { BrowserRouter as Router } from "react-router-dom";
import { FunctionComponent } from "react";
import { queryClient } from "./configs/queryClientConfig";

const App: FunctionComponent = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <FilterInput />
        <ProductsSection />
      </ProductsProvider>
    </QueryClientProvider>
  </Router>
);

export default App;
