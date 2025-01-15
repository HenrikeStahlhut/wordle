import { Box, styled } from "@mui/material";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Wins from "./components/Wins";
import Homepage from "./pages/Homepage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Wrapper>
          {/* <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <div>
              <Board />
              <Keyboard />
            </div>
            <Wins />
          </Box> */}
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};

export default Layout;

const Wrapper = styled(Box)({
  width: "80%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
