import React from "react";
import * as S from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  src?: string;
  className?: string;
}

const Img = ({ children, onClick, src, className }: Props) => {
  return (
    <S.Img src={src} onClick={onClick} className={className}>
      {children}
    </S.Img>
  );
};

export default Img;
