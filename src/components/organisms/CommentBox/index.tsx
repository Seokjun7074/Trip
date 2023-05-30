import useInput from 'hooks/useInput';
import { CommentBoxWrapper, Comment, CommentInput, CommentSubmitButton } from './style';
import { commentAPI } from 'apis/postAPI';

const dummyComments = [
  {
    userId: 1,
    reply_id: 1,
    content: '댓글1',
    created_at: '2023-04-14T12:34:56Z',
  },
  {
    userId: 2,
    reply_id: 2,
    content: '댓글2',
    created_at: '2023-04-14T12:34:56Z',
  },
  {
    userId: 3,
    reply_id: 3,
    content: '댓글3',
    created_at: '2023-04-14T12:34:56Z',
  },
  {
    userId: 4,
    reply_id: 4,
    content: '댓글4',
    created_at: '2023-04-14T12:34:56Z',
  },
];

const CommentBox = () => {
  const [comment, setComment, onChange] = useInput('');
  const comments = dummyComments;

  const onSubmit = async () => {
    const response = await commentAPI.setComment(1, { content: comment });
    setComment('');
  };

  return (
    <CommentBoxWrapper>
      {comments.map(data => (
        <Comment key={data.userId}>{data.content}</Comment>
      ))}
      <CommentInput placeholder="댓글을 입력하세요." onChange={onChange} value={comment} />
      <CommentSubmitButton onClick={onSubmit}>댓글 작성</CommentSubmitButton>
    </CommentBoxWrapper>
  );
};

export default CommentBox;
