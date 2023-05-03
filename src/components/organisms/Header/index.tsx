import React from "react";
import * as S from "./style";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

interface Props {
  children?: any;
}

const Header = ({ children }: Props) => {
  return (
    <S.Header>
      <S.LogoImg src={process.env.PUBLIC_URL + "/assets//trip_logo.png"}></S.LogoImg>
      <S.ButtonWrapper>
        <Link to="/login">
          <S.LoginButton>로그인</S.LoginButton>
        </Link>
      </S.ButtonWrapper>
    </S.Header>
  );
};

export default Header;
