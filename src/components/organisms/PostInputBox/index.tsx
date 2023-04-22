import useInput from "hooks/useInput";
import {
  ContentInput,
  Divider,
  ImageInput,
  InputLabel,
  PostInputWrapper,
  PreviewImage,
  SubmitButton,
  TitleInput,
} from "./style";
import { useState } from "react";

const PostInputBox = () => {
  const [title, titleHandler] = useInput("");
  const [content, contentHandler] = useInput("");
  const [imagePreview, setImagePreview] = useState("");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const blob = new Blob([file]);
      const imgUrl = URL.createObjectURL(blob);
      setImagePreview(imgUrl);
    }
  };

  const submit = () => {
    console.log(title);
    console.log(content);
    console.log(imagePreview);
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
      <Divider>
        <InputLabel>사진 추가</InputLabel>
        <ImageInput type="file" accept="image/*" onChange={onFileChange} />
        <PreviewImage src={imagePreview} />
      </Divider>
      <SubmitButton onClick={submit}>작성하기</SubmitButton>
    </PostInputWrapper>
  );
};

export default PostInputBox;
