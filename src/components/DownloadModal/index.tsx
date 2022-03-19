import { Modal } from "@mui/material";
import React from "react";
import { useDownloadModal } from "../../contexts/DownloadModalContext";
import Button from "../Button";
import { Container, Header, Content, Footer } from "./styles";

const DownloadModal: React.FC = () => {
  const { isOpen, setIsOpen } = useDownloadModal();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Container>
        <Header>
          <h1>Select your download host below</h1>
          <ul>
            <li>Name: 22000.318.CO_RELEASE_CLIPRO_RET_X64FRE_EN-US_RECTIFIED2.5.iso</li>
            <li>Filesize: 5.70 GB</li>
            <li>Version: 2.5</li>
          </ul>
        </Header>
        <Content>
          <Button background="#0078D8">Google Drive</Button>
          <Button background="#0078D8">Google Drive (Link 2)</Button>
          <Button background="#0078D8">Mediafire</Button>
        </Content>
        <Footer>
          <p>SHA256 Sum:</p>
          <div>93e8d3977d9414d7f32455af4fa38ea7a71170dc9119d2d1f8e1fba24826fae2</div>
        </Footer>
      </Container>
    </Modal>
  );
};

export default DownloadModal;
