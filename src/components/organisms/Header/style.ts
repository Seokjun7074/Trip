import FlexBox from "components/atoms/FlexBox";
import Button from "components/atoms/Button";
import Img from "components/atoms/Img";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.title};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 99;
`;

export const ButtonWrapper = styled(FlexBox)`
  gap: 5px;
`;

export const LoginButton = styled(Button)`
  padding: ${({ theme }) => theme.size.s};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
  color: ${({ theme }) => theme.color.darkgray};
  transition: transform 0.2s ease-in 0s;
  :hover {
    background-color: ${({ theme }) => theme.color.lightgray};
    transform: scale(1) translate(0, -5%);
    color: ${({ theme }) => theme.color.blue};
    font-weight: 900;
  }
`;

export const LogoutButton = styled(LoginButton)``;
export const PostButton = styled(LoginButton)``;

export const LogoImg = styled(Img)`
  height: 100%;
`;
