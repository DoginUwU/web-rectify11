import styled from "styled-components";
import { Container as MuiContainer } from "@mui/material";

const Container = styled(MuiContainer)`
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    img {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding-right: 3rem;

  h1 {
    font-size: 4.5rem;
    line-height: 90px;
  }
  span {
    color: ${({ theme }) => theme.colors.primary.blue};
  }
  button {
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 0;

    h1 {
      font-size: 3.5rem;
      line-height: 60px;
      text-align: center;
    }

    button {
      width: 100%;
    }
  }
`;

export { Container, Content };
