import styled from "styled-components";

const Container = styled.input`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 0;
  padding: 1rem;
  outline-color: ${({ theme }) => theme.colors.primary.blue};
`;

export { Container };
