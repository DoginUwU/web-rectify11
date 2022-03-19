import styled from "styled-components";
import { Container as MuiContainer } from "@mui/material";

const Container = styled(MuiContainer)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    color: #484848;
    font-weight: 400;
    font-size: 2.5rem;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    & > img {
      width: calc(100% * (1 / 2) - 1rem);
      border-radius: 0.5rem;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.01);
      }
    }
  }
`;

export { Container };
