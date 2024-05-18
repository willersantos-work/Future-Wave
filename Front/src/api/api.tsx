import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
    maxBodyLength: Infinity,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Keep-Alive": "timeout: 20",
        "X-Powered-By": "Express",
        Accept: "application/json"
    }
});
