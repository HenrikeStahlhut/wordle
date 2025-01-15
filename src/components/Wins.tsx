import { Box, Typography } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Wins = () => {
  const { getItem } = useLocalStorage("wins");
  const winData = getItem();

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
        {winData?.totalWins || 0}
      </Typography>
    </Box>
  );
};

export default Wins;
