import { TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { useProductsContext } from "../../hooks/useProductsContext";

const FilterInput: FunctionComponent = () => {
  const { changeFilterId, filterId } = useProductsContext();

  return (
    <TextField
      placeholder="Filter items by id"
      type="number"
      onChange={({ target }) => changeFilterId(target.value)}
      value={filterId}
    />
  );
};

export default FilterInput;
