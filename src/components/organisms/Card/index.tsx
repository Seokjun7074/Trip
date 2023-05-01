import Label from "components/atoms/Label";
import { CardWrapper } from "./style";

interface Props {
  children?: React.ReactNode;
  title: string;
}
const Card = ({ children, title }: Props) => {
  return (
    <CardWrapper>
      <Label>{title}</Label>
    </CardWrapper>
  );
};

export default Card;
