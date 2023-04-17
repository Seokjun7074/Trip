import React from "react";
import * as S from "./style";
interface Props {
  children: any;
}

const FlexBox = ({ children }: Props) => {
  return <S.FlexBox>{children}</S.FlexBox>;
};
export default FlexBox;
