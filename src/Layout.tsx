import { Box, styled } from "@mui/material";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Homepage from "./pages/Homepage";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

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
          {/* <Header />
          <Homepage /> */}
          <Board />
          <Keyboard />
        </Wrapper>
      </main>
      {/* <Footer /> */}
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
