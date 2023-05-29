import FlexBox from "components/atoms/FlexBox";
import styled from "styled-components";

export const CardWrapper = styled(FlexBox)`
  width: 300px;
  height: 250px;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  /* border: 1px solid grey; */
  box-shadow: 1px 1px 5px grey;
  overflow: hidden;
  color: ${({ theme }) => theme.color.darkgray};
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  :hover {
    transform: scale(1) translate(0, -5%);
  }
`;
