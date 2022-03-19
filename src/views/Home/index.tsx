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
      images={[
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/e-1_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/e-3_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/e-4_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/e-5_orig.png",
      ]}
    />
    <DarkMode />
    <NewLook />
    <ImageGalery
      title="Fluent Setup"
      images={[
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-103_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-104_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-106_orig.png",
        "https://rectify11.weebly.com/uploads/1/3/9/5/139517684/screenshot-109_orig.png",
      ]}
    />
    <Footer />
  </Container>
);

export default Home;
