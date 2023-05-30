import * as S from './style';

interface Props {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

const Input = ({ type, value, placeholder, onChange, className }: Props) => {
  return <S.Input type={type} value={value} placeholder={placeholder} onChange={onChange} className={className} />;
};

export default Input;
