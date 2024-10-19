import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Footercontainer>
      <Typography>Made by Henny</Typography>
    </Footercontainer>
  );
};

export default Footer;

const Footercontainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "3rem",
  bottom: 0,
  left: 0,
  right: 0,
});
