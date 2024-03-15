import { Grid } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultErrorFallback from "./components/DefaultErrorFallback/DefaultErrorFallback";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import { queryClient } from "./configs/queryClientConfig";
import { PageControlContextProvider } from "./contexts/PageControlContext";

const App: FunctionComponent = () => (
  <ErrorBoundary fallbackRender={DefaultErrorFallback}>
    <Router>
      <QueryClientProvider client={queryClient}>
        <PageControlContextProvider>
          <Grid
            container
            sx={{ width: "50%", margin: "auto" }}
            direction="column"
            alignItems="center"
          >
            <ProductsPage />
          </Grid>
        </PageControlContextProvider>
      </QueryClientProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
