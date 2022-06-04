import axios from "axios"

const url = "http://localhost:8090/student-group"

export const getGroups = async () => {
    return await axios.get(url)
}

export const updateGroup = async (id, data) => {
    return await axios.patch(`${url}/${id}`, data)
}