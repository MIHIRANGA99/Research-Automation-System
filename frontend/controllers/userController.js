import axios from "axios";

const url = "http://localhost:8090/student";

export const getUsers = axios.get(url)
