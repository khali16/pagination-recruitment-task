import { Button, CircularProgress, Typography } from "@mui/material";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { FunctionComponent, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { usePageControlContext } from "../../hooks/usePageControlContext";
import FilterInput from "../FilterInput/FilterInput";
import ProductsSection from "../ProductsSection/ProductsSection";
import { PageControlContextState } from "../../contexts/PageControlContext";

const ProductsPage = () => {
  const { filterId, changeFilterId } = usePageControlContext();
  return (
    <>
      <FilterInput filterId={filterId} onChange={changeFilterId} />
      <Suspense
        fallback={
          <CircularProgress
            sx={{ display: "block", margin: "auto", padding: 20 }}
          />
        }
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
    <div>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
};

export default ProductsPage;
