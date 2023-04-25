import API from "../axios";
import { setPostInterface, editPostInterface } from "./postInterface";

export const setPost = (data: setPostInterface) => API.post("/posts", data);

export const getPost = (id: number) => API.get(`/posts/${id}`);

export const editPost = (id: number, data: editPostInterface) => API.put(`/posts/${id}`, data);

export const deletePost = (id: number) => API.delete(`/posts/${id}`);

export const likePost = (id: number) => API.post(`/posts/${id}/like`);

export const searchPost = (page: number, size: number, keyword: string) =>
  API.post(`/posts/search?page=${page}&size=${size}&keyword=${keyword}`);

export const getAllPost = (page: number, size: number, sort: string) =>
  API.get(`/board?page=${page}&size=${size}&sort=${sort}`);
