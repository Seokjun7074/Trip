import API from "../axios";
import { setPostInterface, editPostInterface } from "./postInterface";

export const setPost = (data: setPostInterface) => API.post("/posts", data);

export const getPost = (id: number) => API.get(`/posts/${id}`);

export const editPost = (id: number, data: editPostInterface) => API.put(`/posts/${id}`, data);

export const deletePost = (id: number) => API.delete(`/posts/${id}`);
