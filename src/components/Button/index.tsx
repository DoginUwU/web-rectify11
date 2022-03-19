import React from "react";

import { Container } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<IButtonProps> = ({ variant = "primary", ...rest }) => <Container variant={variant} {...rest} />;

export default Button;
