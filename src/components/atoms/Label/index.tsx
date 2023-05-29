import * as S from "./style";

interface Props {
  className?: string;
  children: string;
}

const Label = ({ className, children }: Props) => {
  return <S.Label className={className}>{children}</S.Label>;
};

export default Label;
