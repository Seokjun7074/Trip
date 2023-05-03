import { useEffect, useState } from "react";
import { DetailBoxWrapper, DetailLabel, DetailText } from "./style";
import { getPost } from "apis/postAPI";

const initState = {
  registerTime: "yyyy-MM-dd HH:mm:ss",
  name: "작성자 이름",
  title: "tt",
  content: "cc",
  views: 1,
  likes: 3,
  like: true,
};

const DetailBox = ({ postId }: any) => {
  const [postData, setPostData] = useState(initState);

  useEffect(() => {
    getPost(postId).then((res) => {
      setPostData(res.data);
    });
  }, [postId]);

  return (
    <DetailBoxWrapper>
      <DetailLabel>{postData.title}</DetailLabel>
      <DetailText>{postData.content}</DetailText>
    </DetailBoxWrapper>
  );
};

export default DetailBox;
