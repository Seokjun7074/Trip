import React from "react";
import * as S from "./style";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <S.Button onClick={onClick} className={className}>
      {children}
    </S.Button>
  );
};

export default Button;
