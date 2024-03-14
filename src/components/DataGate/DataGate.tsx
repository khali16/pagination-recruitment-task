import { FunctionComponent, PropsWithChildren } from "react";
import { useProductsContext } from "../../hooks/useProductsContext";
import { CircularProgress, Typography } from "@mui/material";

const DataGate: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { isError, isFetching } = useProductsContext();
  console.log(isFetching);
  if (isFetching)
    return (
      <CircularProgress
      // sx={{ display: "block", margin: "auto", padding: 20 }}
      />
    );
  if (isError)
    return <Typography color="error">Ups... Something went wrong</Typography>;

  return children;
};

export default DataGate;
