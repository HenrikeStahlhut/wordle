import { Grid } from "@mui/material";
import GridRow from "./GridRow";

const WordleGrid = () => {
  return (
    <Grid container width={"50rem"} justifyContent={"center"}>
      {[...Array(5)].map((_, index) => (
        <GridRow key={index} isFirstRow={index === 0} />
      ))}
    </Grid>
  );
};

export default WordleGrid;
