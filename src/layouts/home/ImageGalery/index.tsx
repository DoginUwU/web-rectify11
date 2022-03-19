import { Box } from "@mui/material";
import React from "react";
import { Container } from "./styles";

interface IImageGaleryProps {
  title: string;
  description?: string;
  images: string[];
}

const ImageGalery: React.FC<IImageGaleryProps> = ({ title, description, images }) => (
  <Container>
    <h1>{title}</h1>
    <p>{description}</p>
    <Box>
      {images.map((image, index) => (
        <img key={image} src={image} alt={`Showcase #${index}`} />
      ))}
    </Box>
  </Container>
);

export default ImageGalery;
