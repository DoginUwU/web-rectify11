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

  div {
    overflow-wrap: break-word;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 90px;
  }

  span,
  strong {
    color: ${({ theme }) => theme.colors.primary.blue};
  }

  button {
    margin-top: 1rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 0;

    h1 {
      font-size: 3.5rem;
      line-height: 60px;
      text-align: center;
    }

    button,
    a {
      width: 100%;
    }

    .buttons {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 0;
    }
  }
`;

export { Container, Content };
