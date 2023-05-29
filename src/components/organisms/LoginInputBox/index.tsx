import useInput from "hooks/useInput";
import { LoginButton, LoginInput, LoginInputBoxWrapper } from "./style";
import Form from "components/atoms/Form";
import { userAPI } from "apis/loginAPI";
import { loginInterface } from "apis/loginAPI/loginInterface";
import GoogleLoginButton from "components/googleLogin";

const LoginInputBox = () => {
  const [email, setEmail, onChangeEmail] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");

  const makeObject = () => {
    return {
      email: email,
      password: password,
    };
  };

  const setRequest = async (data: loginInterface) => {
    const response = await userAPI.loginUser(data);
    return response.data;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = makeObject();
    const loginResponse = await setRequest(data);
    console.log(loginResponse);
  };

  return (
    <LoginInputBoxWrapper>
      <Form onSubmit={onSubmit}>
        <LoginInput type="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
        <LoginInput type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
        <LoginButton type="submit">로그인</LoginButton>
        <GoogleLoginButton />
      </Form>
    </LoginInputBoxWrapper>
  );
};
export default LoginInputBox;
