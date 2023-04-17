import React from "react";
import * as S from "./style";

interface Props {
  text?: string;
  className?: string;
}

const Label = ({ text, className }: Props) => {
  return <S.Label className={className}>{text}</S.Label>;
};

export default Label;
