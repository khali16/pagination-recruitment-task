import { TableCell, TableRow } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Product } from "../../types/models";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

const ProductCard: FunctionComponent<Product> = (props) => {
  const { id, name, year, color } = props;
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const toggleDetailsModal = () =>
    setShowDetailsModal((prevState) => !prevState);

  return (
    <>
      <TableRow
        key={id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          backgroundColor: color,
        }}
        onClick={() => setShowDetailsModal(true)}
      >
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{year}</TableCell>
      </TableRow>
      <ProductDetailsModal
        showDetailsModal={showDetailsModal}
        toggleDetailsModal={toggleDetailsModal}
        {...props}
      />
    </>
  );
};

export default ProductCard;
