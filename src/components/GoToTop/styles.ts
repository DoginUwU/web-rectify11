import { Link } from "react-scroll";
import styled from "styled-components";

interface ContainerProps {
  isVisible?: boolean;
}

const Container = styled(Link)<ContainerProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export { Container };
