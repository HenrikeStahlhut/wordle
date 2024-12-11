import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type PopupProps = {
  message: any;
  show: any;
};

const Popup = ({ message, show }: PopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "black",
        color: "white",
        px: 1.5,
        py: 0.75,
        borderRadius: 1,
        transition: "opacity 300ms ease-in-out",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <Typography sx={{ color: "#fff" }}>{message}</Typography>
    </Box>
  );
};

export default Popup;
