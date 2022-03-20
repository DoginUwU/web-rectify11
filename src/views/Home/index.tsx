import { useSinglePrismicDocument } from "@prismicio/react";
import React, { createElement, useEffect, useState } from "react";
import { ILandingPagePrismic } from "../../@types/landingPage";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Comparation from "../../layouts/home/Comparation";
import DarkMode from "../../layouts/home/DarkMode";
import ImageGalery from "../../layouts/home/ImageGalery";
import Presentation from "../../layouts/home/Presentation";
import { convertPrismicDocument } from "./helper";
import { Container } from "./styles";

const Home: React.FC = () => {
  const [document] = useSinglePrismicDocument("landing_pag");
  const [landingPage, setLandingPage] = useState<ILandingPagePrismic>();

  useEffect(() => {
    setLandingPage(() => convertPrismicDocument(document));
  }, [document]);

  if (!landingPage || !landingPage.items) {
    return <Loading />;
  }

  return (
    <Container>
      <Presentation
        title={landingPage.title}
        description={landingPage.description}
        primary_image={landingPage.primary_image}
      />
      {landingPage.items.map((item) => {
        const props = {
          title: item.title,
          description: item.description,
          images: item.images,
          key: item.title,
        };

        switch (item.type) {
          case "dark_mode":
            return createElement(DarkMode, props);
          case "comparation":
            return createElement(Comparation, props);
          default:
            return createElement(ImageGalery, props);
        }
      })}
      <Footer />
    </Container>
  );
};

export default Home;
