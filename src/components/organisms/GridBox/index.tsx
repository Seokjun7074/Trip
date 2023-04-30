import { useEffect, useState } from "react";
import Card from "../Card";
import { Grid, GridBoxWrapper } from "./style";
import { getBoard } from "apis/postAPI";

const dummy = [
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
  {
    title: "제목",
  },
];

const GridBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = getBoard(0, 0).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <GridBoxWrapper>
      <Grid>
        {dummy.map((e, idx) => (
          <Card key={idx} title={e.title}></Card>
        ))}
      </Grid>
    </GridBoxWrapper>
  );
};

export default GridBox;
