import { Box } from "@mui/material";
import React from "react";

import { Container } from "./styles";

const NewLook: React.FC = () => (
  <Container>
    <h1>All New Look</h1>
    <Box>
      <img src="assets/1_orig.png" alt="" />
      <img src="assets/2_orig.png" alt="" />
    </Box>
  </Container>
);

export default NewLook;
