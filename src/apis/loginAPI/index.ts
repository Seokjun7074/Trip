import API from "../axios";
import { loginInterface, signupInterface } from "./loginInterface";

export const userAPI = {
  signupUser: (data: signupInterface) => API.post("/users", data),

  editUser: (id: string, data: signupInterface) => API.put(`/users/${id}`, data),

  deleteUser: (id: string) => API.delete(`/users/${id}`),

  loginUser: (data: loginInterface) => API.post("/login", data),

  logoutUser: () => API.post("/logout"),
};
