import { Box, styled } from "@mui/material";
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
