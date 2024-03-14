import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../types/models";
import { FunctionComponent, PropsWithChildren } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductsPagination from "../ProductsPagination/ProductsPagination";

interface Props {
  products: Product | Product[];
}

const Root: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="products table">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
          <TableCell sx={{ fontWeight: 700 }} align="right">
            Name
          </TableCell>
          <TableCell sx={{ fontWeight: 700 }} align="right">
            Year
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

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

const Pagination: FunctionComponent<{ page: number; total_pages: number }> = (
  props
) => <ProductsPagination {...props} />;

export const ProductList = {
  Root,
  MultipleProducts,
  SingleProduct,
  Pagination,
};
