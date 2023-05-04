import FlexBox from "components/atoms/FlexBox";
import styled from "styled-components";

export const CardWrapper = styled(FlexBox)`
  width: 300px;
  height: 250px;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  overflow: hidden;
  color: black;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  :hover {
    transform: scale(1) translate(0, -5%);
  }
`;
