import Label from 'components/atoms/Label';
import { CardWrapper } from './style';
import Img from 'components/atoms/Img';
import { PropType } from '../GridBox';

const Card = ({ title }: PropType) => {
  return (
    <CardWrapper>
      <Img src="https://dummyimage.com/600x400/000/fff" />
      <Label>{title}</Label>
    </CardWrapper>
  );
};

export default Card;
