import React from "react";
import Button from "../../../components/Button";
import { useDownloadModal } from "../../../contexts/DownloadModalContext";
import { Container, Content } from "./styles";

const Presentation: React.FC = () => {
  const { setIsOpen } = useDownloadModal();

  const handleDownload = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Content>
        <h1>
          Everything <span>Windows 11</span> should’ve been.
        </h1>
        <p>
          Rectify11 aspires to re-create what Windows 11 as an operating system should have been - fast, simple, unique
          and consistent Windows 11 have always been quite a half-baked OS.
        </p>
        <div className="buttons">
          <Button background="#0078D8" onClick={handleDownload}>
            Download now
          </Button>
          <a href="https://discord.gg/MtDMRrgSrr" target="_blank" rel="noreferrer">
            <Button background="#0078D8">Community</Button>
          </a>
        </div>
      </Content>
      <img src="assets/notebook.webp" alt="Notebook with Rectify11 " />
    </Container>
  );
};

export default Presentation;
