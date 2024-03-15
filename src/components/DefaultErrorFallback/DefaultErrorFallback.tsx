import { Button, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const DefaultErrorFallback: FunctionComponent = () => (
  <>
    <Typography variant="h3">Whoops! Something went wrong...</Typography>
    <Button
      onClick={() => {
        window.location.reload();
      }}
    >
      Refresh the page?
    </Button>
  </>
);

export default DefaultErrorFallback;
