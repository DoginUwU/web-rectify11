import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import useOffsetTop from "../../hooks/useOffsetTop";
import { Container } from "./styles";

const GoToTop: React.FC = () => {
  const isTop = useOffsetTop(100);

  return (
    <Container isVisible={isTop} to="header" spy smooth duration={500} href="#">
      <AiOutlineArrowUp />
    </Container>
  );
};

export default GoToTop;
