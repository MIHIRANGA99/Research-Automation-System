import axios from "axios";

const url = "http://localhost:8090/student-group/create"

export const addGroup = async (data) => {
    return await axios.post(url, data)
}