import { Box } from "@mui/material";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Container } from "./styles";

const NewLook: React.FC = () => (
  <Container>
    <h1>All New Look</h1>
    <p>
      Thanks to Rectify11 team&apos;s awesome work, we were successful in making win32 programs look similar to WinUI
    </p>
    <Box>
      <ReactBeforeSliderComponent
        firstImage={{ id: "white", imageUrl: "assets/white.webp" }}
        secondImage={{ id: "dark", imageUrl: "assets/dark.webp" }}
      />
    </Box>
  </Container>
);

export default NewLook;
