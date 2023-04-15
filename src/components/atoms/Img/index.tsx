import React from "react";
import * as S from "./style";

interface Props {
  children?: any;
  onClick?: any;
  src?: string;
}

const Img = ({ children, onClick, src }: Props) => {
  return (
    <S.Img src={src} onClick={onClick}>
      {children}
    </S.Img>
  );
};

export default Img;
