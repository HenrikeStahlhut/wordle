import { Grid } from "@mui/material";

const GridRow = () => {
  return (
    <Grid container gap={2}>
      {[...Array(5)].map((_, index) => (
        <Grid
          item
          xs={2.2}
          key={index}
          style={{
            height: "8rem",
            backgroundColor: "#eee",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          {/* Content goes here */}
          Item {index + 1}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridRow;
