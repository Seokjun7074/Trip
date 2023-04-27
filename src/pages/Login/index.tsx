import { useState } from "react";
import { LoginWrapper } from "./style";
import LoginInputBox from "components/organisms/LoginInputBox";
import SignupInputBox from "components/organisms/SignupInputBox";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const changeLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <LoginWrapper>
      {isLogin ? <LoginInputBox /> : <SignupInputBox />}
      <button onClick={changeLogin}>{isLogin ? "회원가입" : "로그인"}</button>
    </LoginWrapper>
  );
};
export default Login;
