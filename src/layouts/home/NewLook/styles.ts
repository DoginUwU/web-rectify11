import styled from "styled-components";
import { Container as MuiContainer } from "@mui/material";

const Container = styled(MuiContainer)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    color: ${({ theme }) => theme.colors.gray[10]};
    font-weight: 400;
    font-size: 2.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[10]};
    margin-top: -2rem;
  }

  img {
    max-height: 400px;
    object-fit: cover;
  }

  & > div {
    max-height: 400px;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 0.5rem;

    & > div {
      max-height: 400px;
    }
  }
`;

export { Container };
