import { useEffect, useState } from 'react';
import { boardAPI } from 'apis/postAPI';
import Card from '../Card';
import { Grid, GridBoxWrapper } from './style';
import { Link } from 'react-router-dom';

const initeState = {
  postId: 1,
  registerTime: 'yyyy-MM-dd HH:mm:ss',
  writer: '작성자1',
  title: '제목',
  views: 1,
  likes: 1,
};

const GridBox = () => {
  const [notices, setNotices] = useState([initeState]);
  const [boards, setBoards] = useState([initeState]);

  const getResponse = async () => {
    const response = await boardAPI.getBoard(1, 1);
    setBoards(response.data.posts.boards);
    setNotices(response.data.posts.notices);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <GridBoxWrapper>
      <Grid>
        {boards.map(board => (
          <Link key={board.postId} to={'/detail/' + board.postId}>
            <Card title={board.title}></Card>
          </Link>
        ))}
      </Grid>
    </GridBoxWrapper>
  );
};

export default GridBox;
