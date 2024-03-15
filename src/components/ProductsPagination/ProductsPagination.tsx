import { Pagination, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { ChangePage } from "../../types/models";

interface Props {
  page: number;
  total_pages: number;
  changePage: ChangePage;
}

const ProductsPagination: FunctionComponent<Props> = ({
  page,
  total_pages,
  changePage,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        aria-label="products pagination"
        count={total_pages}
        defaultPage={page}
        onChange={changePage}
      />
    </Stack>
  );
};

export default ProductsPagination;
