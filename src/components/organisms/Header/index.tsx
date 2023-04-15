import React from "react";
import * as S from "./style";

interface Props {
  children?: any;
}

const Header = ({ children }: Props) => {
  return (
    <S.Header>
      <S.LogoImg src={process.env.PUBLIC_URL + "/assets//trip_logo.png"}></S.LogoImg>
      <S.ButtonWrapper>
        <S.LoginButton>로그인</S.LoginButton>
        <S.LoginButton>회원가입</S.LoginButton>
      </S.ButtonWrapper>
    </S.Header>
  );
};

export default Header;
