import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.blue};
  }

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    grid-template-areas:
      "Name Email Email"
      "Message Message Message";

    .name {
      grid-area: Name;
    }

    .email {
      grid-area: Email;
    }

    .message {
      grid-area: Message;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export { Container, Form };
