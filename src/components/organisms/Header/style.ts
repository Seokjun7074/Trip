import FlexBox from "components/atoms/FlexBox";
import Button from "components/atoms/Button";
import Img from "components/atoms/Img";
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
  background-color: white;
`;

export const ButtonWrapper = styled(FlexBox)`
  gap: 1rem;
`;

export const LoginButton = styled(Button)`
  padding: ${({ theme }) => theme.size.s};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  color: ${({ theme }) => theme.color.darkgray};
  :hover {
    background-color: ${({ theme }) => theme.color.lightgray};
  }
`;

export const LogoImg = styled(Img)`
  height: 100%;
`;
