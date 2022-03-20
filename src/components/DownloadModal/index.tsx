import { Modal } from "@mui/material";
import { useSinglePrismicDocument } from "@prismicio/react";
import * as prismicT from "@prismicio/types";
import React, { useEffect, useState } from "react";
import { IDownload } from "../../@types/download";
import { useDownloadModal } from "../../contexts/DownloadModalContext";
import Button from "../Button";
import { convertPrismicDocument } from "./helper";
import { Container, Content, Footer, Header } from "./styles";

type PrismicPage = prismicT.PrismicDocument<{
  file_hash: prismicT.RichTextField;
  body: prismicT.SliceZone;
}>;

const DownloadModal: React.FC = () => {
  const [document] = useSinglePrismicDocument<PrismicPage>("download_page");
  const { isOpen, setIsOpen } = useDownloadModal();
  const [download, setDownload] = useState<IDownload>();

  useEffect(() => {
    if (!document) return;
    setDownload(() => convertPrismicDocument(document));
  }, [document]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={!!document && !!download && isOpen} onClose={handleClose}>
      <Container>
        <Header>
          <h1>Select your download host below</h1>
          <ul>
            {download?.informations.map((info) => (
              <li key={info}>{info}</li>
            ))}
          </ul>
        </Header>
        <Content>
          {download?.downloads.map((item) => (
            <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
              <Button background="#0078D8">{item.name}</Button>
            </a>
          ))}
        </Content>
        <Footer>
          <p>SHA256 Sum:</p>
          <div>{download?.file_hash}</div>
        </Footer>
      </Container>
    </Modal>
  );
};

export default DownloadModal;
