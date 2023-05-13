import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLabel, GoogleLogo, GoogleWrapper } from "./style";
import axios from "axios";

const GoogleLoginButton = () => {
  const onSuccess = async (res: any) => {
    console.log("response", res);
    const code = res.code;
    // 토큰 얻기위해 백엔드로 요청
    const tokens = await axios.get(
      `${process.env.REACT_APP_API_URL}/login/oauth2/code/google?state=LD5N-hEOE0TBpSHUYfDzs161BF71UYgZtShVzc_WLD4%3D&code=` +
        code +
        `&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent`
    );
    console.log("토큰 받았나?", tokens);
    // const clientId = "822252169285-0o71jpd6ev0dv6imd6mck6f8l2mubqnv.apps.googleusercontent.com";
    // const data = await axios.post(
    //   `https://accounts.google.com/o/oauth2/v2/auth?client_id=822252169285-0o71jpd6ev0dv6imd6mck6f8l2mubqnv.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`
    // );
    // console.log(data);
  };
  const googleSocialLogin = useGoogleLogin({
    onSuccess: onSuccess,
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
