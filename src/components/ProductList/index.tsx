import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../models";
import { FunctionComponent } from "react";
import ProductCard from "../ProductCard";

interface Props {
  products: Product | Product[];
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
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
      <TableBody>
        {Array.isArray(products) ? (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <ProductCard {...products} />
        )}
      </TableBody>
    </Table>
  );
};

export default ProductList;
