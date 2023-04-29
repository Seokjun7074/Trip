import API from "../axios";
import { loginInterface, signupInterface } from "./loginInterface";

export const signupUser = async (data: signupInterface) => {
  const res = await API.post("/users", data);
  return res;
};

export const editUser = async (id: string, data: signupInterface) => {
  const res = await API.put(`/users/${id}`, data);
  return res;
};

export const deleteUser = async (id: string) => {
  const res = await API.delete(`/users/${id}`);
  return res;
};

export const loginUser = async (data: loginInterface) => {
  const res = await API.post("/login", data);
  return res;
};

export const logoutUser = async () => {
  const res = await API.post("/logout");
  return res;
};
