import React from "react";
import * as S from "./style";

interface Props {
  onClick: any;
  children: any;
}

const Button = ({ children, onClick }: Props) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
