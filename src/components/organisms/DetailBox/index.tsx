import { DetailBoxWrapper, DetailLabel, DetailText } from "./style";

const DetailBox = (postId: any) => {
  console.log(postId);
  return (
    <DetailBoxWrapper>
      <DetailLabel>제목</DetailLabel>
      <DetailText>내용</DetailText>
    </DetailBoxWrapper>
  );
};

export default DetailBox;

// "getPost": {
//     "status": 200,
//     "model": {
//       "registerTime": "yyyy-MM-dd HH:mm:ss",
//       "name": "작성자 이름",
//       "title": "제목",
//       "content": "내용",
//       "views": 1,
//       "likes": 3,
//       "like": true
//     }
//   }
