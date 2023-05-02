import { useParams } from "react-router-dom";
import { DetailWrapper } from "./style";
import DetailBox from "components/organisms/DetailBox";

const Detail = () => {
  const { postId } = useParams();
  return (
    <DetailWrapper>
      detail페이지
      <span>{postId}</span>
      <DetailBox postId={postId} />
    </DetailWrapper>
  );
};
export default Detail;
