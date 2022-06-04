import axios from "axios";

const url = "http://localhost:8090/requests";
const Grpurl = "http://localhost:8090/student-group";

export const getRequests = axios.get(url);

export const updateGroup = async (id, data) => {
  return await axios.patch(`${Grpurl}/${id}`, data);
};

export const acceptRequest = async (id, data) => {
  return await axios.patch(`${url}/${id}`, data);
};

export const rejectRequest = async (id, data) => {
  return await axios.delete(`${url}/${id}`, data);
};
