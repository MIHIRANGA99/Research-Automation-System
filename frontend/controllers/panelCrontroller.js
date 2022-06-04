import axios from "axios"

const url = "http://localhost:8090/panel"

export const createPanel = async (data) => {
    return await axios.post(`${url}/register`, data)
}