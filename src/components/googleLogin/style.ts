import FlexBox from "components/atoms/FlexBox";
import Img from "components/atoms/Img";
import Label from "components/atoms/Label";
import styled from "styled-components";

export const GoogleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 5px;
  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.l};
  cursor: pointer;
  gap: 40px;
`;
export const GoogleLogo = styled(Img)`
  width: 8%;
  height: auto;
`;
export const GoogleLabel = styled(Label)`
  width: 100%;
  font-size: ${({ theme }) => theme.size.m};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
`;
