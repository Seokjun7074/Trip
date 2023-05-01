import * as S from "./style";

interface Props {
  children: any;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, className, onSubmit }: Props) => {
  return (
    <S.FormWrapper onSubmit={onSubmit} className={className}>
      {children}
    </S.FormWrapper>
  );
};

export default Form;
