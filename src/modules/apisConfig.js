import axios from "axios";

export const localApi = axios.create({ baseURL: "http://localhost:4000/"}) ;
export const unaulaApi = axios.create({ baseURL: "http://167.172.143.224:3000/"});