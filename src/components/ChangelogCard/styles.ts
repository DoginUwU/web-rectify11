import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: 4rem;
  }

  p {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;

const ChangelogImprovement = styled(Box)`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  font-weight: 300;

  svg {
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.primary.blue};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    svg {
      margin-left: 0;
      min-width: 1rem;
      min-height: 1rem;
    }
  }
`;

export { Container, ChangelogImprovement };
