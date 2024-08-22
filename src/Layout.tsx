import { Box, styled } from "@mui/material";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Homepage from "./pages/Homepage";

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
          <Header />
          <Homepage />
        </Wrapper>
      </main>
      <Footer />
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
