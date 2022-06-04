import axios from "axios";

const url = "http://localhost:8090/EvaluateDocs/create"

export const addMarks = async (data) => {
    return await axios.post(url, data)
}