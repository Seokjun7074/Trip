import { useEffect, useState } from "react";
import Card from "../Card";
import { Grid, GridBoxWrapper } from "./style";
import { getBoard } from "apis/postAPI";

const initeState = {
  postId: 1,
  registerTime: "yyyy-MM-dd HH:mm:ss",
  writer: "작성자1",
  title: "제목",
  views: 1,
  likes: 1,
};

const GridBox = () => {
  const [notices, setNotices] = useState([initeState]);
  const [boards, setBoards] = useState([initeState]);

  useEffect(() => {
    const fetchData = getBoard(0, 0).then((res) => {
      // console.log(res.data.posts.notices);
      setBoards(res.data.posts.boards);
      setNotices(res.data.posts.notices);
    });
  }, []);

  return (
    <GridBoxWrapper>
      <Grid>
        {boards.map((board) => (
          <Card key={board.postId} title={board.title}></Card>
        ))}
      </Grid>
    </GridBoxWrapper>
  );
};

export default GridBox;
