import axios from "axios";

const studentUrl = "http://localhost:8090/student";
const staffUrl = "http://localhost:8090/staff";

export const getStudents = axios.get(studentUrl)
export const getStaff = axios.get(staffUrl)
