import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { FunctionComponent, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { usePageControlContext } from "../../hooks/usePageControlContext";
import FilterInput from "../FilterInput/FilterInput";
import ProductsSection from "../ProductsSection/ProductsSection";
import { PageControlContextState } from "../../contexts/PageControlContext";

const ProductsPage: FunctionComponent = () => {
  const { filterId, changeFilterId } = usePageControlContext();
  return (
    <>
      <FilterInput filterId={filterId} onChange={changeFilterId} />
      <Suspense
        data-testid="suspense-fallback"
        fallback={<CircularProgress sx={{ padding: 5 }} />}
      >
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary, error }) => (
                <>
                  <Refetcher filterId={filterId} reset={resetErrorBoundary} />
                  <Typography variant="subtitle1">{error.message}</Typography>
                </>
              )}
            >
              <ProductsSection />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    </>
  );
};

const Refetcher: FunctionComponent<
  Pick<PageControlContextState, "filterId"> & { reset: VoidFunction }
> = ({ reset }) => {
  return (
    <Box>
      <Button onClick={reset}>Try again</Button>
    </Box>
  );
};

export default ProductsPage;
