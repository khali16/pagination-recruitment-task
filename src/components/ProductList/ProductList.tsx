import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";
import { ChangePage, Product } from "../../types/models";
import ProductCard from "../ProductCard/ProductCard";

//TODO remove duplicated styles
const Root: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Table aria-label="products table">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
        <TableCell sx={{ fontWeight: 700 }}>Year</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>{children}</TableBody>
  </Table>
);

const MultipleProducts: FunctionComponent<{ products: Product[] }> = ({
  products,
}) => (
  <>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </>
);

const SingleProduct: FunctionComponent<{ product: Product }> = ({
  product,
}) => <ProductCard {...product} />;

const Navigation: FunctionComponent<{
  page: number;
  total_pages: number;
  changePage: ChangePage;
}> = ({ total_pages, page, changePage }) => (
  <Stack spacing={2}>
    <Pagination
      aria-label="products pagination"
      count={total_pages}
      defaultPage={page}
      onChange={changePage}
    />
  </Stack>
);

export const ProductList = {
  Root,
  MultipleProducts,
  SingleProduct,
  Navigation,
};
