import styled, { css } from "styled-components";
import Color from "color";

interface IContainer {
  background?: string;
  variant: "primary" | "secondary";
  loading?: boolean;
}

const Container = styled.button<IContainer>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ loading }) => (loading ? 0.5 : 1)};
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};

  ${({ variant, background }) =>
    variant === "primary"
      ? css`
          background-color: ${background};
          color: ${Color(background).isDark() ? "#fff" : "#000"};
          border: none;
        `
      : css`
          background-color: transparent;
          color: ${background};
          border-color: ${background};
        `}

  &:hover {
    opacity: 0.8;
  }
`;

export { Container };
