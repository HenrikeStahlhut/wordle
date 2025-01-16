import { Box, Typography } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Wins = () => {
  const { getItem } = useLocalStorage("wins");
  const winData = getItem();
  const totalWins =
    winData.length > 0 ? winData[winData.length - 1].totalWins : 0;

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
        {totalWins}
      </Typography>
    </Box>
  );
};

export default Wins;
