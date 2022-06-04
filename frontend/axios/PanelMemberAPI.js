import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8090/'
axios.defaults.withCredentials = false;

const responseBody = (response) => response.data;

const request = {
    get: (url, params) => axios.get(url,{params}).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const Staff = {
    addMember: (values) => request.post('staff/addStaff', values),
}

const PanelMember = {
    evaluatePresentation: (values) => request.post('panelMember/evaluatePresentation', values),
    evaluateTopic: (values) => request.post('panelMember/evaluateTopic', values),
    getPresenEvaluDetailsById: (id) => request.get(`panelMember/getEvaluatePresentation/${id}`),
    getGrouplistById: (id) => request.get(`panelMember/getGroupList/${id}`),
    getGroupDetailsById: (id) => request.get(`panelMember/getGroupDetails/${id}`),
}

const api = {
    PanelMember,
    Staff
}

export default api;