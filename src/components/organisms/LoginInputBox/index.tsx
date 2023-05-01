import useInput from "hooks/useInput";
import { LoginButton, LoginInput, LoginInputBoxWrapper } from "./style";
import Form from "components/atoms/Form";
import { loginUser } from "apis/loginAPI";

const LoginInputBox = () => {
  const [email, setEmail, onChangeEmail] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");

  const makeObject = () => {
    return {
      email: email,
      password: password,
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = makeObject();
    console.log(data);
    // const res = await loginUser(data);
  };

  return (
    <LoginInputBoxWrapper>
      <Form onSubmit={onSubmit}>
        <LoginInput type="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
        <LoginInput type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
        <LoginButton type="submit">로그인</LoginButton>
      </Form>
    </LoginInputBoxWrapper>
  );
};
export default LoginInputBox;
