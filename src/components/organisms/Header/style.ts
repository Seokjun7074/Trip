import { FlexBox } from "components/atoms/Box/style";
import { Button } from "components/atoms/Button/style";
import { Img } from "components/atoms/Img/style";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: ${({ theme }) => theme.size.s};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
`;

export const ButtonWrapper = styled(FlexBox)`
  gap: 1rem;
`;

export const LoginButton = styled(Button)`
  padding: ${({ theme }) => theme.size.m};
  height: 50px;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.lightgray};
  text-align: center;
`;

export const LogoImg = styled(Img)`
  height: 100%;
`;
