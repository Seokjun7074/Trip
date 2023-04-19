import useInput from "hooks/useInput";
import { ContentInput, Divider, InputLabel, PostInputWrapper, SubmitButton, TitleInput } from "./style";

const PostInputBox = () => {
  const [title, titleHandler] = useInput("");
  const [content, contentHandler] = useInput("");

  const submit = () => {
    console.log(title);
    console.log(content);
  };

  return (
    <PostInputWrapper>
      <Divider>
        <InputLabel>제목</InputLabel>
        <TitleInput type="text" placeholder="제목" onChange={titleHandler} />
      </Divider>
      <Divider>
        <InputLabel>본문 작성</InputLabel>
        <ContentInput type="text" placeholder="내용" onChange={contentHandler} />
      </Divider>
      <SubmitButton onClick={submit}>작성하기</SubmitButton>
    </PostInputWrapper>
  );
};

export default PostInputBox;
