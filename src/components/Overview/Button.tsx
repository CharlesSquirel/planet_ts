import React from "react";
import { useNavigate } from "react-router";
import { StyledButton } from "./StyledButton";

interface ButtonProps {
  number: string;
  text: string;
  isActive?: boolean;
  planetColor?: string;
  navigate: string;
}

const Button = ({ number, text, isActive, planetColor, navigate }: ButtonProps) => {
  const nav = useNavigate();
  return (
    <StyledButton isActive={isActive} planetColor={planetColor} onClick={() => nav(navigate)}>
      <p className="btn-number">{number}</p>
      <h3>{text}</h3>
    </StyledButton>
  );
};

export default Button;
