import { FunctionComponent, useEffect, useState } from "react";
import { PageControlContextState } from "../../contexts/PageControlContext";
import { Box, Button, Typography } from "@mui/material";

type Props = Pick<PageControlContextState, "filterId"> & {
  reset: VoidFunction;
  errorMessage: string;
};
const QueryErrorFallback: FunctionComponent<Props> = ({
  reset,
  filterId,
  errorMessage,
}) => {
  const [lastQueryId, setLastQueryId] = useState(filterId);

  useEffect(() => {
    if (lastQueryId !== filterId) {
      setLastQueryId(filterId);
      reset();
    }
  }, [filterId, lastQueryId, setLastQueryId, reset]);

  return (
    <>
      <Box>
        <Button onClick={reset}>Try again</Button>
      </Box>
      <Typography variant="subtitle1">{errorMessage}</Typography>
    </>
  );
};

export default QueryErrorFallback;
