import Label from "components/atoms/Label";
import { CardWrapper } from "./style";
import Img from "components/atoms/Img";

interface Props {
  children?: React.ReactNode;
  title: string;
}
const Card = ({ children, title }: Props) => {
  return (
    <CardWrapper>
      <Img src="https://dummyimage.com/600x400/000/fff" />
      <Label>{title}</Label>
    </CardWrapper>
  );
};

export default Card;
