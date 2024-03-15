import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { Product } from "../../types/models";
import { formatUnderscoredText } from "../../utils/stringUtils";

interface Props extends Product {
  showDetailsModal: boolean;
  toggleDetailsModal: VoidFunction;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductDetailsModal: FunctionComponent<Props> = ({
  id,
  name,
  year,
  pantone_value,
  color,
  showDetailsModal,
  toggleDetailsModal,
}) => {
  const details = { id, name, year, pantone_value, color };

  return (
    <Modal
      open={showDetailsModal}
      onClose={toggleDetailsModal}
      aria-labelledby="product-details-modal"
      aria-describedby="shows-product-details"
      data-testid="product-details-modal"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Product details
        </Typography>
        <IconButton
          aria-label="close"
          onClick={toggleDetailsModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          X
        </IconButton>
        <List>
          {Object.keys(details).map((key) => (
            <ListItem key={key}>
              <ListItemText
                primary={formatUnderscoredText(key)}
                secondary={details[key as keyof Product]}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default ProductDetailsModal;
