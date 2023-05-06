import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleLabel, GoogleLogo, GoogleWrapper } from "./style";

const GoogleLoginButton = () => {
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: () => {
      console.log("Login Failed");
    },
    flow: "auth-code",
  });

  return (
    <GoogleWrapper onClick={googleSocialLogin}>
      <GoogleLogo src={process.env.PUBLIC_URL + "google_logo.png"} />
      <GoogleLabel>구글로 시작하기</GoogleLabel>
    </GoogleWrapper>
  );
};

export default GoogleLoginButton;
