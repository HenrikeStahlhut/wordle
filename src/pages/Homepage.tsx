import { Box } from "@mui/material";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import Wins from "../components/Wins";

const Homepage = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
      <div>
        <Board />
        <Keyboard />
      </div>
      <Wins />
    </Box>
  );
};

export default Homepage;
