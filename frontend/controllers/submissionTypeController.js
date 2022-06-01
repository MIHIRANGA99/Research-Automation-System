import axios from "axios"

const url = "http://localhost:8090/submission-types"

export const getTypes = async () => {
    return await axios.get(url)
}

export const addType = async (data) => {
    return await axios.post(url, data)
}