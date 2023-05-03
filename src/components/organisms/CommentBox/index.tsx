import useInput from "hooks/useInput";
import { CommentBoxWrapper, Comment, CommentInput } from "./style";

const dummyComments = [
  {
    userId: 1,
    reply_id: 1,
    content: "댓글1",
    created_at: "2023-04-14T12:34:56Z",
  },
  {
    userId: 2,
    reply_id: 2,
    content: "댓글2",
    created_at: "2023-04-14T12:34:56Z",
  },
  {
    userId: 3,
    reply_id: 3,
    content: "댓글3",
    created_at: "2023-04-14T12:34:56Z",
  },
  {
    userId: 4,
    reply_id: 4,
    content: "댓글4",
    created_at: "2023-04-14T12:34:56Z",
  },
];

const CommentBox = () => {
  const [comment, setComment, onChange] = useInput("");
  const comments = dummyComments;

  return (
    <CommentBoxWrapper>
      {comments.map((data) => (
        <Comment>{data.content}</Comment>
      ))}
      <CommentInput placeholder="댓글을 입력하세요." onChange={onChange} />
    </CommentBoxWrapper>
  );
};

export default CommentBox;
