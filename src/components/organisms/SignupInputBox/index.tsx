import Form from "components/atoms/Form";
import { SignupInputBoxWrapper, SignupInput, SignupButton, RadioBox } from "./style";
import useInput from "hooks/useInput";
import { signupUser } from "apis/loginAPI";

const SignupInputBox = () => {
  const [email, setEmail, onChangeEmail] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck, onChangePasswordCheck] = useInput("");
  const [name, setName, onChangeName] = useInput("");
  const [age, setAge, onChangeAge] = useInput("");
  const [phone, setPhone, onChangePhone] = useInput("");
  const [gender, setGender, onChangeGender] = useInput("");

  const makeObject = () => {
    return {
      email: email,
      password: password,
      name: name,
      age: age,
      phone: phone,
      gender: gender,
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = makeObject();
    console.log(data);
    // const res = await signupUser(data);
  };

  return (
    <SignupInputBoxWrapper>
      <Form onSubmit={onSubmit}>
        <SignupInput type="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
        <SignupInput type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
        <SignupInput
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          placeholder="비밀번호 확인"
        />
        <SignupInput type="text" value={name} onChange={onChangeName} placeholder="이름" />
        <SignupInput type="number" value={age} onChange={onChangeAge} placeholder="나이" />
        <SignupInput type="text" value={phone} onChange={onChangePhone} placeholder="전화번호" />
        <RadioBox>
          <label>
            <input type="radio" name="gender" value="true" onChange={onChangeGender} /> 남
          </label>
          <label>
            <input type="radio" name="gender" value="false" onChange={onChangeGender} /> 여
          </label>
        </RadioBox>
        <SignupButton>회원가입</SignupButton>
      </Form>
    </SignupInputBoxWrapper>
  );
};
export default SignupInputBox;
