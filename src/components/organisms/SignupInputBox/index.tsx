import { SignupInputBoxWrapper, SignupInput, SignupButton, RadioBox } from "./style";

const SignupInputBox = () => {
  return (
    <SignupInputBoxWrapper>
      <SignupInput type="email" placeholder="이메일" />
      <SignupInput type="password" placeholder="비밀번호" />
      <SignupInput type="password" placeholder="이름" />
      <SignupInput type="number" placeholder="나이" />
      <SignupInput type="text" placeholder="전화번호" />
      <RadioBox>
        <label>
          <input type="radio" name="gender" value="true" /> 남
        </label>
        <label>
          <input type="radio" name="gender" value="false" /> 여
        </label>
      </RadioBox>
      <SignupButton>회원가입</SignupButton>
    </SignupInputBoxWrapper>
  );
};
export default SignupInputBox;
