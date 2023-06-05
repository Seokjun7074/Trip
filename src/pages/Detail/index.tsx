import { useParams } from 'react-router-dom';
import { DetailWrapper } from './style';
import DetailBox from 'components/organisms/DetailBox';
import CommentBox from 'components/organisms/CommentBox';

export interface PropType {
  postId: string;
}

const Detail = () => {
  const { postId } = useParams() as { postId: string };

  return (
    <DetailWrapper>
      <DetailBox postId={postId} />
      <CommentBox postId={postId} />
    </DetailWrapper>
  );
};
export default Detail;
