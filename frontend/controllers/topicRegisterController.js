import axios from "axios"

const url = "http://localhost:8090/topic-registration"

export const registerTopic = async (data) => {
    return await axios.post(url, data)
}