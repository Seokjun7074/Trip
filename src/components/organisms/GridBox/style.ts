import FlexBox from "components/atoms/FlexBox";
import styled from "styled-components";

export const GridBoxWrapper = styled(FlexBox)`
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
