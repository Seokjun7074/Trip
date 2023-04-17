import React from "react";
import * as S from "./style";

interface Props {
  value?: string;
  placeholder?: string;
  onChange?: any;
  className?: string;
}

const Input = ({ value, placeholder, onChange, className }: Props) => {
  return <S.Input value={value} placeholder={placeholder} onChange={onChange} className={className} />;
};

export default Input;
