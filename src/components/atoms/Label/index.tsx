import React from "react";
import * as S from "./style";

interface Props {
  text: string;
}

const Input = ({ text }: Props) => {
  return <S.Label>{text}</S.Label>;
};

export default Input;
