import { forwardRef, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IInputProps>((rest, ref) => <Container {...rest} ref={ref} />);

export default Input;
