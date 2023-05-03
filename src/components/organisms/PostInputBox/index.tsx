import useInput from "hooks/useInput";
import { ContentInput, Divider, ImageInput, InputLabel, PreviewImage, SubmitButton, TitleInput } from "./style";
import { useState } from "react";

const PostInputBox = () => {
  const [title, setTitle, titleHandler] = useInput("");
  const [content, setContent, contentHandler] = useInput("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>();
  const formData = new FormData();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const blob = new Blob([file]);
      const imgUrl = URL.createObjectURL(blob);
      setImageFile(file);
      setImagePreview(imgUrl);
    }
  };
  const deleteImagePreview = (imagePreview: string) => {
    URL.revokeObjectURL(imagePreview);
    setImagePreview("");
  };
  const makeFormdata = () => {
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile !== undefined) {
      formData.append("image", imageFile);
    }
  };
  const submit = () => {
    makeFormdata();
    deleteImagePreview(imagePreview);
  };

  return (
    <>
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
    </>
  );
};

export default PostInputBox;
