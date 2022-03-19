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
    color: #0078d8;
  }
  button {
    margin-top: 1rem;
  }
`;

export { Container, Content };
