import FlexBox from 'components/atoms/FlexBox';
import styled from 'styled-components';

export const DetailWrapper = styled(FlexBox)`
  margin: 10px auto;
  padding: ${({ theme }) => theme.size.l};
  height: 97vh;
  width: 60%;
  min-width: 800px;
  box-shadow: 0px 0px 10px grey;
  border-radius: 5px;

  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
