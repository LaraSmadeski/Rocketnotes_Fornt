import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-klc2.onrender.com"
});