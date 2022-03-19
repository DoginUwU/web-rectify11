import React from "react";
import windows11Logo from "../../assets/windows/11.png";
import Button from "../Button";
import { Container, Navigation, NavLink } from "./styles";

const Header: React.FC = () => (
  <Container>
    <img src={windows11Logo} alt="Site logo" />
    <Navigation>
      <NavLink isActive>Home</NavLink>
      <NavLink>Change log</NavLink>
      <NavLink>Contact</NavLink>
    </Navigation>
    <Button background="#0078D8" variant="secondary">
      Download
    </Button>
  </Container>
);

export default Header;
