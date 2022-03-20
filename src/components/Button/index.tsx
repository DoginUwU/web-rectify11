import React from "react";

import { Container } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ variant = "primary", ...rest }) => (
  <Container disabled={rest.loading} variant={variant} {...rest} />
);

export default Button;
