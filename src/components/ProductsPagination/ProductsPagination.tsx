import { Pagination, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { useProductsContext } from "../../hooks/useProductsContext";

interface Props {
  page: number;
  total_pages: number;
}

const ProductsPagination: FunctionComponent<Props> = ({
  page,
  total_pages,
}) => {
  const { changePage } = useProductsContext();

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
