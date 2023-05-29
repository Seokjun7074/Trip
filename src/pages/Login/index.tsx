import { LoginWrapper } from "./style";
import LoginInputBox from "components/organisms/LoginInputBox";
import SignupInputBox from "components/organisms/SignupInputBox";
import useToggle from "hooks/useToggle";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const { isToggle, onChange } = useToggle(true);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginWrapper>
        {isToggle ? <LoginInputBox /> : <SignupInputBox />}
        <button onClick={onChange}>{isToggle ? "회원가입" : "로그인"}</button>
      </LoginWrapper>
    </GoogleOAuthProvider>
  );
};
export default Login;
