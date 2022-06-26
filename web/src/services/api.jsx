import axios from "axios";

const api = axios.create({
    baseUrl: "https://localhost:5001/api/todoitems/",
})
export default api;