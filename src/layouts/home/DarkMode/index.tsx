import { Box } from "@mui/material";
import React from "react";
import { Container } from "./styles";

const DarkMode: React.FC = () => (
  <Container>
    <h1>Consistent dark mode</h1>
    <p>Rectify11 has a consistent dark mode, thanks to the power of visual styles.</p>
    <Box>
      <img src="assets/screenshot-453_orig.webp" alt="" />
      <img src="assets/screenshot-455_orig.webp" alt="" />
    </Box>
  </Container>
);
export default DarkMode;
