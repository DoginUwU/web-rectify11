import React from "react";
import notebookPng from "../../../assets/windows/notebook.png";
import Button from "../../../components/Button";
import { Container, Content } from "./styles";

const Presentation: React.FC = () => (
  <Container>
    <Content>
      <h1>
        Everything <span>Windows 11</span> should’ve been.
      </h1>
      <p>
        Rectify11 aspires to re-create what Windows 11 as an operating system should have been - fast, simple, unique
        and consistent Windows 11 have always been quite a half-baked OS.
      </p>
      <Button background="#0078D8">Download now</Button>
    </Content>
    <img src={notebookPng} alt="Notebook with Rectify11 " />
  </Container>
);

export default Presentation;
