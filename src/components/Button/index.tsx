import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};//Chamar a funcao disabled e implementa-lo ao button 

export default Button;