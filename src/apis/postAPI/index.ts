import API from "../axios";
import { setPostInterface, editPostInterface, getBoardInterface } from "./postInterface";

export const boardAPI = {
  // getBoard: (page: number, size: number) => API.post(`/board?page=${page}&size=${size}&sort=recent`),
  getBoard: (page: number, size: number) => API.get(`/board`),

  getPost: (id: number) => API.get(`/posts/${id}`),

  setPost: (data: setPostInterface) => API.post("/posts", data),

  editPost: (id: number, data: editPostInterface) => API.put(`/posts/${id}`, data),

  deletePost: (id: number) => API.delete(`/posts/${id}`),

  likePost: (id: number) => API.post(`/posts/${id}/like`),

  searchPost: (page: number, size: number, keyword: string) =>
    API.post(`/posts/search?page=${page}&size=${size}&keyword=${keyword}`),

  getAllPost: (page: number, size: number, sort: string) => API.get(`/board?page=${page}&size=${size}&sort=${sort}`),
};
