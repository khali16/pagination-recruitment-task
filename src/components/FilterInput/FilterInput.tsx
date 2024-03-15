import { TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { ConsumerFunction } from "../../types/models";

interface Props {
  onChange: ConsumerFunction<string>;
  filterId: string;
}

const FilterInput: FunctionComponent<Props> = ({ filterId, onChange }) => {
  return (
    <TextField
      placeholder="Filter items by id"
      type="number"
      onChange={({ target }) => onChange(target.value)}
      value={filterId}
    />
  );
};

export default FilterInput;
