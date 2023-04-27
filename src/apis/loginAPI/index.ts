import API from "../axios";
import { loginInterface, signupInterface } from "./loginInterface";

export const signupUser = (data: signupInterface) => API.post("/users", data);

export const editUser = (id: string, data: signupInterface) => API.put(`/users/${id}`, data);

export const deleteUser = (id: string) => API.delete(`/users/${id}`);

export const loginUser = (data: loginInterface) => API.post("/login", data);

export const logoutUser = () => API.post("/logout");
