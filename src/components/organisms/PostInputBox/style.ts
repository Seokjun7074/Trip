import Button from "components/atoms/Button";
import FlexBox from "components/atoms/FlexBox";
import Img from "components/atoms/Img";
import Input from "components/atoms/InputText";
import Label from "components/atoms/Label";
import styled from "styled-components";

export const Divider = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
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

export const ImageInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.size.s};
  height: 50px;
`;

export const PreviewImage = styled(Img)``;

export const SubmitButton = styled(Button)`
  padding: ${({ theme }) => theme.size.m};
  width: 50%;
  font-size: 1.1rem;
  color: white;
  background-color: ${({ theme }) => theme.color.blue};
`;
