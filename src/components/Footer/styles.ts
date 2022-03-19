import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: #fff;
  padding: 3rem;
`;

export { Container };
