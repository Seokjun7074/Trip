import FlexBox from "components/atoms/FlexBox";
import Input from "components/atoms/InputText";
import styled from "styled-components";

export const CommentBoxWrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.size.s};
  border-radius: 5px;
  border: 1px solid grey;
  gap: 10px;
`;

export const Comment = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  padding: ${({ theme }) => theme.size.s};
  border-radius: 5px;
  border: 1px solid grey;
  text-align: left;
`;

export const CommentInput = styled.textarea`
  height: 200px;
  resize: none;
  padding: ${({ theme }) => theme.size.s};
  font-size: ${({ theme }) => theme.size.m};
`;
