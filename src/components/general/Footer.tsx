import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Footercontainer>
      <p>Footer</p>
    </Footercontainer>
  );
};

export default Footer;

const Footercontainer = styled(Box)({
  background: "#eee",
  bottom: 0,
  left: 0,
  right: 0,
});
