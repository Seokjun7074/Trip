import { useParams } from "react-router-dom";
import { DetailWrapper } from "./style";
import DetailBox from "components/organisms/DetailBox";
import CommentBox from "components/organisms/CommentBox";

const Detail = () => {
  const { postId } = useParams() as { postId: string };

  return (
    <DetailWrapper>
      <h3>{postId}</h3>
      <DetailBox postId={postId} />
      <CommentBox />
    </DetailWrapper>
  );
};
export default Detail;
