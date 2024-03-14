import { CircularProgress, Typography } from "@mui/material";
import { useProductsContext } from "../../hooks/useProductsContext";
import ProductList from "../ProductList";
import { FunctionComponent } from "react";

const ProductsSection: FunctionComponent = () => {
  const { data, isFetching, isError } = useProductsContext();

  if (isFetching)
    return (
      <CircularProgress sx={{ display: "block", margin: "auto", padding: 5 }} />
    );
  if (isError)
    return (
      <Typography color="error">Whoops, something went wrong...</Typography>
    );
  if (data) return <ProductList products={data.data} />;
};

export default ProductsSection;
