/* eslint-disable camelcase */
import React from "react";
import Button from "../../../components/Button";
import { useDownloadModal } from "../../../contexts/DownloadModalContext";
import { Container, Content } from "./styles";

interface IPresentationProps {
  title: string;
  description?: string;
  primary_image: string;
}

const Presentation: React.FC<IPresentationProps> = ({ title, description, primary_image }) => {
  const { setIsOpen } = useDownloadModal();

  const handleDownload = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Content>
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          style={{
            maxWidth: "600px",
          }}
        />
        <p dangerouslySetInnerHTML={{ __html: description || "" }} />
        <div className="buttons">
          <Button background="#0078D8" onClick={handleDownload}>
            Download now
          </Button>
          <a href="https://discord.gg/tYQGpMHmZr" target="_blank" rel="noreferrer">
            <Button background="#0078D8">Community</Button>
          </a>
        </div>
      </Content>
      <img src={primary_image} alt="Notebook with Rectify11 " />
    </Container>
  );
};

export default Presentation;
