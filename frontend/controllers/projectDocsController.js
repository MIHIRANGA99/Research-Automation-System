import axios from "axios";

const url = "http://localhost:8090/projectDocs";
const Grpurl = "http://localhost:8090/student-group";

export const getDocuments = async () => {
    return await axios.get(url)
}