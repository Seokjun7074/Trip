import Home from "pages/Home";
import Post from "pages/Post";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{<Route path="/" element={<Home />} />}</Routes>
      <Routes>{<Route path="/post" element={<Post />} />}</Routes>
    </BrowserRouter>
  );
};

export default Router;
