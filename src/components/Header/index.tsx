import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useTheme } from "styled-components";
import windows11Logo from "../../assets/windows/11.png";
import { useDownloadModal } from "../../contexts/DownloadModalContext";
import useBreakpoint from "../../hooks/useBreakpoint";
import Button from "../Button";
import { NavLinks } from "./helper";
import { Container, DrawerContainer, Navigation } from "./styles";

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const theme = useTheme();
  const { setIsOpen } = useDownloadModal();
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint <= Number(theme.breakpoints.md.replace("px", ""));

  const handleDownload = () => {
    setIsOpen(true);
  };

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Container id="header">
      <img src={windows11Logo} alt="Site logo" />
      {!isMobile ? (
        <>
          <Navigation>{NavLinks("/")}</Navigation>
          <Button background="#0078D8" variant="secondary" onClick={handleDownload}>
            Download
          </Button>
        </>
      ) : (
        <IoMdMenu onClick={handleToggleMenu} />
      )}
      <DrawerContainer open={isOpenMenu} onClose={handleToggleMenu}>
        <div>{NavLinks("/")}</div>
        <Button background="#0078D8" variant="secondary" onClick={handleDownload}>
          Download
        </Button>
      </DrawerContainer>
    </Container>
  );
};
