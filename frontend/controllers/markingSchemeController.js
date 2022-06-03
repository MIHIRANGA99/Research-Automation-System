import axios from "axios"

const url = "http://localhost:8090/markingScheme"

export const addMarkingScheme = async (data) => {
    return await axios.post(url, data)
}