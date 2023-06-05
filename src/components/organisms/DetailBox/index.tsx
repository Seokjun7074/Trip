import { useEffect, useState } from 'react';
import { DetailBoxWrapper, DetailLabel, DetailText } from './style';
import { boardAPI } from 'apis/postAPI';
import { PropType } from 'pages/Detail';

const initState = {
  registerTime: 'yyyy-MM-dd HH:mm:ss',
  name: '작성자 이름',
  title: 'tt',
  content: 'cc',
  views: 1,
  likes: 3,
  like: true,
};

const DetailBox = ({ postId }: PropType) => {
  const [postData, setPostData] = useState(initState);

  const getResponse = async () => {
    const response = await boardAPI.getPost(postId);
    setPostData(response.data);
  };

  useEffect(() => {
    getResponse();
  }, [postId]);

  return (
    <DetailBoxWrapper>
      <DetailLabel>{postData.title}</DetailLabel>
      <DetailText>{postData.content}</DetailText>
    </DetailBoxWrapper>
  );
};

export default DetailBox;
