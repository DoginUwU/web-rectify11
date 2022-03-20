import styled from "styled-components";
import { Container as MuiContainer, Drawer } from "@mui/material";

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

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > a {
    height: 100%;
  }
`;

const NavLink = styled.p<INavLink>`
  font-weight: 500;
  position: relative;
  cursor: pointer;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary.blue : "#000")};
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
    background-color: ${({ theme }) => theme.colors.primary.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: fit-content;
  }
`;

const DrawerContainer = styled(Drawer)`
  & > .MuiPaper-root {
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 1.35rem;
    }
  }
`;

export { Container, Navigation, NavLink, DrawerContainer };
