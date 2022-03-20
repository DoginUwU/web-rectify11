import React from "react";
import Footer from "../../components/Footer";
import DarkMode from "../../layouts/home/DarkMode";
import ImageGalery from "../../layouts/home/ImageGalery";
import NewLook from "../../layouts/home/NewLook";
import Presentation from "../../layouts/home/Presentation";

import { Container } from "./styles";

const Home: React.FC = () => (
  <Container>
    <Presentation />
    <ImageGalery
      title="Desktop"
      description="Our dear and well-known Windows 11 desktop with a few more news."
      images={["assets/e-1_orig.webp", "assets/e-3_orig.webp", "assets/e-4_orig.webp", "assets/e-5_orig.webp"]}
    />
    <DarkMode />
    <NewLook />
    <ImageGalery
      title="Fluent Setup"
      images={[
        "assets/screenshot-103_orig.webp",
        "assets/screenshot-104_orig.webp",
        "assets/screenshot-106_orig.webp",
        "assets/screenshot-109_orig.webp",
      ]}
    />
    <Footer />
  </Container>
);

export default Home;
