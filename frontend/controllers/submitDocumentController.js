import axios from "axios"

const url = "http://localhost:8090/projectDocs"

export const submitDoc = async (data) => {
    return await axios.post(url, data)
}