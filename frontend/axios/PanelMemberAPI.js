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

const PanelMember = {
    //addMember: (values) => request.post('panelMember/addMember', values),
    evaluatePresentation: (values) => request.post('panelMember/evaluatePresentation', values),
}

const api = {
    PanelMember
}

export default api;