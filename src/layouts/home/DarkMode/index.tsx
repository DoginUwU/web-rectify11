import { Box } from "@mui/material";
import React from "react";
import { Container } from "./styles";

interface IDarkModeProps {
  title: string;
  description?: string;
  images: string[];
}

const DarkMode: React.FC<IDarkModeProps> = ({ title, description, images }) => (
  <Container>
    <h1>{title}</h1>
    <p>{description}</p>
    <Box>
      {images.map((image) => (
        <img key={image} src={image} alt="Dark desktop" />
      ))}
    </Box>
  </Container>
);
export default DarkMode;
