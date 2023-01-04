import { BASE_URL, apiEndpoints } from "../config/Endpoints";
import axios from "axios";

export async function Register(data) {
  return axios.post(`${BASE_URL}/${apiEndpoints.REGISTER}`, data);
}

export async function Login(data) {
  return axios.post(`${BASE_URL}/${apiEndpoints.LOGIN}`, data);
}
