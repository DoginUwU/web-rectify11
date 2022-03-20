import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
  padding: 3rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 4rem;
    gap: 2rem;
  }
`;

const Header = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 300;
  }

  ul {
    list-style-type: none;
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    li {
      max-width: 300px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    li {
      max-width: 200px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  a,
  button {
    width: 100%;
  }

  button {
    padding: 1rem;
  }
`;

const Footer = styled.div`
  width: 100%;

  & > div {
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.gray[30]};
    color: #fff;
    border-radius: 4px;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export { Container, Header, Content, Footer };
