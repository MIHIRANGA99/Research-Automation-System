import axios from "axios";

const studentUrl = "http://localhost:8090/student";
const staffUrl = "http://localhost:8090/staff";

export const getStudents = axios.get(studentUrl);

export const getStaff = axios.get(staffUrl);

export const deleteUserById = (id, role) => {
  const url = role === "Student" ? studentUrl : staffUrl;
  return axios.delete(`${url}/delete/${id}`);
};

export const updateUserById = (id, newData, role) => {
  const url = role === "Student" ? studentUrl : staffUrl;
  return axios.patch(`${url}/update/${id}`, newData);
};
