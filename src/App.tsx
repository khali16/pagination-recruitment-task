import FilterInput from "./components/FilterInput/FilterInput";
import { QueryClientProvider } from "@tanstack/react-query";
import { ProductsProvider } from "./contexts/ProductsContext";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import { BrowserRouter as Router } from "react-router-dom";
import { FunctionComponent } from "react";
import { queryClient } from "./configs/queryClientConfig";
import DataGate from "./components/DataGate/DataGate";
import { Grid } from "@mui/material";

const App: FunctionComponent = () => (
  <Router>
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <Grid
          container
          sx={{ width: "50%", margin: "auto" }}
          direction="column"
          alignItems="center"
        >
          <FilterInput />
          <DataGate>
            <ProductsSection />
          </DataGate>
        </Grid>
      </ProductsProvider>
    </QueryClientProvider>
  </Router>
);

export default App;
