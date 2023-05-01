import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.lightgray};
  padding: ${({ theme }) => theme.size.s};
  border-radius: 5px;
  border: none;
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.blue};
  }
`;
