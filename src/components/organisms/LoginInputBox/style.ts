import Button from "components/atoms/Button";
import FlexBox from "components/atoms/FlexBox";
import Input from "components/atoms/InputText";
import styled from "styled-components";

export const LoginInputBoxWrapper = styled(FlexBox)`
  margin: auto 0;
  width: 50%;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const LoginInput = styled(Input)`
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => theme.size.s};
  font-size: large;
  background-color: white;
  border: 1px solid gray;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  padding: ${({ theme }) => theme.size.s};
  font-size: large;
  font-weight: bold;
  color: ${({ theme }) => theme.color.lightgray};
  background-color: ${({ theme }) => theme.color.blue};
`;
