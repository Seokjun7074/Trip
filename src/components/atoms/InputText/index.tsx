import React from "react";
import * as S from "./style";

interface Props {
  value: string;
  placeholder: string;
  onChange: any;
}

const Input = ({ value, placeholder, onChange }: Props) => {
  return <S.Input value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
