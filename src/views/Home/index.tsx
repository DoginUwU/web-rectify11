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
      images={["assets/e-1_orig.png", "assets/e-3_orig.png", "assets/e-4_orig.png", "assets/e-5_orig.png"]}
    />
    <DarkMode />
    <NewLook />
    <ImageGalery
      title="Fluent Setup"
      images={[
        "assets/screenshot-103_orig.png",
        "assets/screenshot-104_orig.png",
        "assets/screenshot-106_orig.png",
        "assets/screenshot-109_orig.png",
      ]}
    />
    <Footer />
  </Container>
);

export default Home;
