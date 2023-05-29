import Button from "components/atoms/Button";
import FlexBox from "components/atoms/FlexBox";
import Img from "components/atoms/Img";
import Input from "components/atoms/InputText";
import Label from "components/atoms/Label";
import styled from "styled-components";

export const Divider = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputLabel = styled(Label)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const TitleInput = styled(Input)`
  width: 100%;
  height: 50px;
  padding: ${({ theme }) => theme.size.s};
  font-size: large;
`;
export const ContentInput = styled(TitleInput)`
  height: 100px;
`;

export const PreviewImageWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 300px;
  cursor: pointer;
`;

export const PreviewImage = styled(Img)`
  border-radius: 5px;
  width: 70%;
  height: auto;
`;

export const SubmitButton = styled(Button)`
  padding: ${({ theme }) => theme.size.m};
  width: 50%;
  font-size: 1.1rem;
  color: white;
  background-color: ${({ theme }) => theme.color.blue};
`;
