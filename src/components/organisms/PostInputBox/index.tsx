import { HiPhoto } from "react-icons/hi2";
import useInput from "hooks/useInput";
import {
  ContentInput,
  Divider,
  InputLabel,
  PreviewImageWrapper,
  PreviewImage,
  SubmitButton,
  TitleInput,
} from "./style";
import { useRef, useState } from "react";

const PostInputBox = () => {
  const [title, setTitle, titleHandler] = useInput("");
  const [content, setContent, contentHandler] = useInput("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File[]>([]);
  const imageRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();

  const onCickImageUpload = () => {
    if (imageRef.current !== null) {
      imageRef.current.click();
    }
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const blob = new Blob([file]);
      const imgUrl = URL.createObjectURL(blob);
      setImageFile([file]);
      setImagePreview(imgUrl);
    }
  };
  const deleteImagePreview = () => {
    if (imageRef.current !== null) {
      imageRef.current.value = "";
      URL.revokeObjectURL(imagePreview);
      setImagePreview("");
      setImageFile([]);
    }
  };
  const makeFormdata = () => {
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile !== undefined) {
      formData.append("image", imageFile[0]);
    }
  };
  const submit = () => {
    makeFormdata();
    deleteImagePreview();
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
        {imagePreview ? (
          <PreviewImage src={imagePreview} />
        ) : (
          <PreviewImageWrapper onClick={onCickImageUpload}>
            <HiPhoto size="60%" />
          </PreviewImageWrapper>
        )}
        {imagePreview ? <button onClick={deleteImagePreview}>사진 삭제</button> : null}
      </Divider>
      <SubmitButton onClick={submit}>작성하기</SubmitButton>
      <input type="file" accept="image/*" onChange={onFileChange} ref={imageRef} style={{ display: "none" }} />
    </>
  );
};

export default PostInputBox;
