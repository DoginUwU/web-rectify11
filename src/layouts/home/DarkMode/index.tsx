import { Box } from "@mui/material";
import React from "react";
import { Container } from "./styles";

const DarkMode: React.FC = () => (
  <Container>
    <h1>Consistent dark mode</h1>
    <p>Rectify11 has a consistent dark mode, thanks to the power of visual styles.</p>
    <Box>
      <img src="https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-453_orig.png" alt="" />
      <img src="https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-455_orig.png" alt="" />
    </Box>
  </Container>
);
export default DarkMode;
