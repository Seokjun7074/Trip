import Header from "components/organisms/Header";
import Card from "components/organisms/Card";
import { HomeWrapper } from "./style";

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

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      {dummy.map((e, idx) => (
        <Card key={idx} title={e.title}></Card>
      ))}
    </HomeWrapper>
  );
};
export default Home;
