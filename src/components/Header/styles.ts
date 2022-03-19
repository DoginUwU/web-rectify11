import styled from "styled-components";
import { Container as MuiContainer } from "@mui/material";

interface INavLink {
  isActive?: boolean;
}

const Container = styled(MuiContainer)`
  display: flex !important;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  & > img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const NavLink = styled.p<INavLink>`
  font-weight: 500;
  position: relative;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#0078D8" : "#000")};
  height: 100%;
  display: flex;
  align-items: center;

  &::after {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    border-radius: 2rem;
    height: 2px;
    background-color: #0078d8;
  }
`;

export { Container, Navigation, NavLink };
