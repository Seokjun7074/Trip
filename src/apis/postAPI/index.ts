import API from "../axios";
import { setPostInterface, editPostInterface, getBoardInterface } from "./postInterface";

export const getBoard = async (data: getBoardInterface, page: number, size: number) => {
  const res = await API.post(`/board?page=${page}&size=${size}&sort=recent`, data);
  return res;
};

export const setPost = async (data: setPostInterface) => {
  const res = await API.post("/posts", data);
  return res;
};

export const getPost = async (id: number) => {
  const res = await API.get(`/posts/${id}`);
  return res;
};

export const editPost = async (id: number, data: editPostInterface) => {
  const res = await API.put(`/posts/${id}`, data);
  return res;
};

export const deletePost = async (id: number) => {
  const res = await API.delete(`/posts/${id}`);
  return res;
};

export const likePost = async (id: number) => {
  const res = await API.post(`/posts/${id}/like`);
  return res;
};

export const searchPost = async (page: number, size: number, keyword: string) => {
  const res = await API.post(`/posts/search?page=${page}&size=${size}&keyword=${keyword}`);
  return res;
};

export const getAllPost = async (page: number, size: number, sort: string) => {
  const res = await API.get(`/board?page=${page}&size=${size}&sort=${sort}`);
  return res;
};
