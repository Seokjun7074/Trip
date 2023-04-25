import FlexBox from "components/atoms/FlexBox";
import styled from "styled-components";

export const LoginWrapper = styled(FlexBox)`
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.l};
  height: 100vh;
  width: 60%;
  min-width: 800px;
  box-shadow: 0px 0px 10px grey;

  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
