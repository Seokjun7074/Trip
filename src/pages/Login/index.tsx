import { LoginWrapper } from "./style";
import LoginInputBox from "components/organisms/LoginInputBox";
import SignupInputBox from "components/organisms/SignupInputBox";
import useToggle from "hooks/useToggle";

const Login = () => {
  const { isToggle, onChange } = useToggle(true);

  return (
    <LoginWrapper>
      {isToggle ? <LoginInputBox /> : <SignupInputBox />}
      <button onClick={onChange}>{isToggle ? "회원가입" : "로그인"}</button>
    </LoginWrapper>
  );
};
export default Login;
