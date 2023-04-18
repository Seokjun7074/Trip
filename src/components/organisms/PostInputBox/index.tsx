import { ContentInput, Divider, InputLabel, PostInputWrapper, SubmitButton, TitleInput } from "./style";

const PostInputBox = () => {
  return (
    <PostInputWrapper>
      <Divider>
        <InputLabel>제목</InputLabel>
        <TitleInput type="text" placeholder="제목" onChange={() => {}} />
      </Divider>
      <Divider>
        <InputLabel>본문 작성</InputLabel>
        <ContentInput type="text" placeholder="내용" onChange={() => {}} />
      </Divider>
      <SubmitButton>작성하기</SubmitButton>
    </PostInputWrapper>
  );
};

export default PostInputBox;
