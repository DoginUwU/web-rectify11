import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #000;
  color: #fff;
  padding: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    opacity: 0.8;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin-top: 2rem;
    gap: 1rem;

    img {
      width: calc(100% * (1 / 2) - 1rem);
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }
`;

export { Container };
