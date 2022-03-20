import styled from "styled-components";
import { Container as MuiContainer } from "@mui/material";

const Container = styled(MuiContainer)`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4rem;
  margin-top: 3rem;
`;

export { Container };
