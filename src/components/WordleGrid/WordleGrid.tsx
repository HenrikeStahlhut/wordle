import { Box, Grid } from "@mui/material";
import GridRow from "./GridRow";

const WordleGrid = () => {
  return (
    <Grid container width={"50rem"}>
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </Grid>
  );
};

export default WordleGrid;
