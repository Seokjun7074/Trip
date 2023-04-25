import { LoginButton, LoginInput, LoginInputBoxWrapper } from "./style";

const LoginInputBox = () => {
  return (
    <LoginInputBoxWrapper>
      <LoginInput type="email" placeholder="이메일" />
      <LoginInput type="password" placeholder="비밀번호" />
      <LoginButton>로그인</LoginButton>
    </LoginInputBoxWrapper>
  );
};
export default LoginInputBox;
