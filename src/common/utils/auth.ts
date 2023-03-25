import { UserLogin, UserRegister } from "@/common/types";
import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  validateStatus: (status) => true,
});

export async function authRegister(data: UserRegister) {
  const { name, email, password } = data;
  const response = await API.post("/api/auth/register", {
    name,
    email,
    password,
  });

  return response;
}

export async function authLogin(data: UserLogin) {
  const { email, password } = data;
  const response = await API.post("/api/auth/login", {
    email,
    password,
  });

  return response;
}

export async function authLogout() {
  await API.get("/api/auth/logout");
  Cookies.remove("user");
  window.location.href = "/login";
}
