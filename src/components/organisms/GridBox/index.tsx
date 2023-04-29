import Card from "../Card";
import { Grid, GridBoxWrapper } from "./style";

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
