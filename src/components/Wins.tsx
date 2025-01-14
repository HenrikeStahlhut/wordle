import { Box, Typography } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Wins = () => {
  const { getItem } = useLocalStorage("wins");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      margin={"0 0 10rem 0"}
    >
      <Typography fontSize={"25px"} fontWeight={"bold"}>
        Wins
      </Typography>
      <Typography fontSize={"25px"} fontWeight={"bold"}>
        {getItem()}
      </Typography>
    </Box>
  );
};

export default Wins;
