import API from '../axios';
import { setPostInterface, editPostInterface } from './postInterface';

export const boardAPI = {
  // getBoard: (page: number, size: number) => API.post(`/board?page=${page}&size=${size}&sort=recent`),
  getBoard: (page: number, size: number) => API.get(`/board`),

  getPost: (postId: string) => API.get(`/posts/${postId}`),
  // getPost: (id: number) => API.get(`/boards/posts/boards?postId=${id}`),

  setPost: (data: setPostInterface) => API.post('/posts', data),

  editPost: (postId: string, data: editPostInterface) => API.put(`/posts/${postId}`, data),

  deletePost: (postId: string) => API.delete(`/posts/${postId}`),

  likePost: (postId: string) => API.post(`/posts/${postId}/like`),

  searchPost: (page: number, size: number, keyword: string) =>
    API.post(`/posts/search?page=${page}&size=${size}&keyword=${keyword}`),

  getAllPost: (page: number, size: number, sort: string) => API.get(`/board?page=${page}&size=${size}&sort=${sort}`),
};

export const commentAPI = {
  setComment: (postId: string, data: { content: string }) => API.post(`/posts/${postId}/comments`, data),

  editComment: (postId: string, commentId: string, data: { content: string }) =>
    API.put(`/posts/${postId}/comments/${commentId}`, data),

  deleteComment: (postId: string, commentId: string) => API.delete(`/posts/${postId}/comments/${commentId}`),
};
