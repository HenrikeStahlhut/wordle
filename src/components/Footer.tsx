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
  background: "black",
});
