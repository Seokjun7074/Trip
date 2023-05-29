import React from "react";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const FlexBox = ({ children, className }: Props) => {
  return <S.FlexBox className={className}>{children}</S.FlexBox>;
};
export default FlexBox;
