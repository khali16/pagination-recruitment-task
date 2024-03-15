import { CircularProgress } from "@mui/material";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { FunctionComponent, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { usePageControlContext } from "../../hooks/usePageControlContext";
import FilterInput from "../FilterInput/FilterInput";
import ProductsSection from "../ProductsSection/ProductsSection";
import QueryErrorFallback from "../QueryErrorFallback/QueryErrorFallback";

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
                <QueryErrorFallback
                  errorMessage={error.message}
                  filterId={filterId}
                  reset={resetErrorBoundary}
                />
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

export default ProductsPage;
