import { Box } from "@mui/material";
import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Container } from "./styles";

interface IComparationProps {
  title: string;
  description?: string;
  images: string[];
}

const Comparation: React.FC<IComparationProps> = ({ title, description, images }) => (
  <Container>
    <h1>{title}</h1>
    <p>{description}</p>
    <Box>
      <ReactBeforeSliderComponent firstImage={{ imageUrl: images[0] }} secondImage={{ imageUrl: images[1] }} />
    </Box>
  </Container>
);

export default Comparation;
