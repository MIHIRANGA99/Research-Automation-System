import axios from "axios"

const url = "http://localhost:8090/document"

export const getDocs = async () => {
    return await axios.get(url)
}

export const addDoc = async (data) => {
    return await axios.post(url, data)
}