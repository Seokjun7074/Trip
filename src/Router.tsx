import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Post from "pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:postId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
